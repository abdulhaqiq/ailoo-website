import { NextRequest, NextResponse } from 'next/server'
import { 
  authenticateToken, 
  createErrorResponse, 
  createSuccessResponse,
  addCorsHeaders,
  validateRequest,
  validators,
  rateLimit
} from '@/lib/auth/middleware'
import { DatabaseQuery } from '@/lib/database/connection'
import { 
  BlogPost, 
  BlogPostWithRelations, 
  BlogSearchFilters, 
  CreateBlogPostRequest,
  ApiResponse 
} from '@/lib/database/schema'

// GET /api/blog/posts - Get all blog posts with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 100, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const { searchParams } = new URL(request.url)
    
    // Parse query parameters
    const filters: BlogSearchFilters = {
      search: searchParams.get('search') || undefined,
      category: searchParams.get('category') || undefined,
      tag: searchParams.get('tag') || undefined,
      author: searchParams.get('author') || undefined,
      status: searchParams.get('status') || 'published',
      is_featured: searchParams.get('featured') === 'true' ? true : undefined,
      date_from: searchParams.get('date_from') || undefined,
      date_to: searchParams.get('date_to') || undefined,
      sort_by: (searchParams.get('sort_by') as any) || 'published_at',
      sort_order: (searchParams.get('sort_order') as any) || 'desc',
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10')
    }

    // Build query
    let baseQuery = `
      SELECT 
        bp.*,
        bc.name as category_name,
        bc.slug as category_slug,
        bc.color as category_color,
        ba.name as author_name,
        ba.email as author_email,
        ba.avatar_url as author_avatar,
        ba.bio as author_bio,
        bi.url as featured_image_url,
        bi.alt_text as featured_image_alt,
        (SELECT COUNT(*) FROM blog_comments WHERE post_id = bp.id AND status = 'approved') as comments_count
      FROM blog_posts bp
      LEFT JOIN blog_categories bc ON bp.category_id = bc.id
      LEFT JOIN blog_authors ba ON bp.author_id = ba.id
      LEFT JOIN blog_images bi ON bp.featured_image_id = bi.id
      WHERE bp.is_active = true
    `

    // Add search conditions
    if (filters.search) {
      baseQuery += ` AND (LOWER(bp.title) LIKE LOWER('%${filters.search}%') 
                     OR LOWER(bp.excerpt) LIKE LOWER('%${filters.search}%')
                     OR LOWER(bp.content) LIKE LOWER('%${filters.search}%'))`
    }

    // Add category filter
    if (filters.category) {
      baseQuery += ` AND bc.slug = '${filters.category}'`
    }

    // Add author filter
    if (filters.author) {
      baseQuery += ` AND ba.id = '${filters.author}'`
    }

    // Add status filter
    if (filters.status) {
      baseQuery += ` AND bp.status = '${filters.status}'`
    }

    // Add featured filter
    if (filters.is_featured !== undefined) {
      baseQuery += ` AND bp.is_featured = ${filters.is_featured}`
    }

    // Add date filters
    if (filters.date_from) {
      baseQuery += ` AND bp.published_at >= '${filters.date_from}'`
    }
    if (filters.date_to) {
      baseQuery += ` AND bp.published_at <= '${filters.date_to}'`
    }

    // Add sorting
    const sortColumn = filters.sort_by === 'view_count' ? 'bp.view_count' : `bp.${filters.sort_by}`
    baseQuery += ` ORDER BY ${sortColumn} ${filters.sort_order?.toUpperCase()}`

    // Add pagination
    const { query, countQuery, offset } = DatabaseQuery.buildPaginationQuery(
      baseQuery,
      filters.page || 1,
      filters.limit || 10
    )

    // Execute queries
    const posts = await DatabaseQuery.query<BlogPostWithRelations>(query)
    const countResult = await DatabaseQuery.query<{ total: number }>(countQuery)
    const total = countResult[0]?.total || 0

    const response: ApiResponse<BlogPostWithRelations[]> = {
      success: true,
      data: posts,
      pagination: {
        page: filters.page || 1,
        limit: filters.limit || 10,
        total,
        total_pages: Math.ceil(total / (filters.limit || 10))
      }
    }

    return addCorsHeaders(createSuccessResponse(response))

  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return addCorsHeaders(createErrorResponse('Failed to fetch blog posts', 500))
  }
}

// POST /api/blog/posts - Create new blog post (Admin only)
export async function POST(request: NextRequest) {
  try {
    // Authentication
    const { user, error } = await authenticateToken(['admin', 'editor', 'author'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting for authenticated users
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 50, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const body: CreateBlogPostRequest = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      title: validators.required,
      excerpt: validators.required,
      content: validators.required,
      category_id: validators.required,
      status: (value) => validators.oneOf(['draft', 'published'])(value)
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    // Generate slug if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()

    // Calculate reading time (average 200 words per minute)
    const wordCount = body.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    // Create blog post
    const postData = {
      id: crypto.randomUUID(),
      title: body.title,
      slug,
      excerpt: body.excerpt,
      content: body.content,
      featured_image_id: body.featured_image_id || null,
      author_id: user.id,
      category_id: body.category_id,
      status: body.status,
      is_featured: body.is_featured || false,
      meta_title: body.meta_title || body.title,
      meta_description: body.meta_description || body.excerpt,
      keywords: body.keywords || [],
      tags: body.tag_ids || [],
      reading_time: readingTime,
      view_count: 0,
      published_at: body.status === 'published' ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_active: true
    }

    // Insert into database
    const insertQuery = `
      INSERT INTO blog_posts (
        id, title, slug, excerpt, content, featured_image_id, author_id, 
        category_id, status, is_featured, meta_title, meta_description, 
        keywords, tags, reading_time, view_count, published_at, 
        created_at, updated_at, is_active
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
      ) RETURNING *
    `

    const result = await DatabaseQuery.query<BlogPost>(insertQuery, Object.values(postData))
    const newPost = result[0]

    if (!newPost) {
      return addCorsHeaders(createErrorResponse('Failed to create blog post', 500))
    }

    return addCorsHeaders(createSuccessResponse(newPost, 'Blog post created successfully', 201))

  } catch (error) {
    console.error('Error creating blog post:', error)
    return addCorsHeaders(createErrorResponse('Failed to create blog post', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
