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
  BlogTag, 
  CreateTagRequest,
  ApiResponse 
} from '@/lib/database/schema'

// GET /api/blog/tags - Get all tags
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 100, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const { searchParams } = new URL(request.url)
    const includeInactive = searchParams.get('include_inactive') === 'true'
    const search = searchParams.get('search')

    let query = `
      SELECT * FROM blog_tags 
      WHERE is_active = true
    `

    if (includeInactive) {
      query = `SELECT * FROM blog_tags`
    }

    if (search) {
      query += ` AND LOWER(name) LIKE LOWER('%${search}%')`
    }

    query += ` ORDER BY name ASC`

    const tags = await DatabaseQuery.query<BlogTag>(query)

    const response: ApiResponse<BlogTag[]> = {
      success: true,
      data: tags
    }

    return addCorsHeaders(createSuccessResponse(response))

  } catch (error) {
    console.error('Error fetching tags:', error)
    return addCorsHeaders(createErrorResponse('Failed to fetch tags', 500))
  }
}

// POST /api/blog/tags - Create new tag (Admin/Editor only)
export async function POST(request: NextRequest) {
  try {
    // Authentication
    const { user, error } = await authenticateToken(['admin', 'editor'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 30, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const body: CreateTagRequest = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      name: validators.required
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    // Generate slug if not provided
    const slug = body.slug || body.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()

    // Check if tag with same slug already exists
    const existingQuery = `SELECT id FROM blog_tags WHERE slug = $1`
    const existing = await DatabaseQuery.query(existingQuery, [slug])
    
    if (existing.length > 0) {
      return addCorsHeaders(createErrorResponse('Tag with this slug already exists', 409))
    }

    // Create tag
    const tagData = {
      id: crypto.randomUUID(),
      name: body.name,
      slug,
      description: body.description || null,
      color: body.color || '#6B7280', // Default gray color
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_active: true
    }

    const insertQuery = `
      INSERT INTO blog_tags (
        id, name, slug, description, color, created_at, updated_at, is_active
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `

    const result = await DatabaseQuery.query<BlogTag>(insertQuery, Object.values(tagData))
    const newTag = result[0]

    if (!newTag) {
      return addCorsHeaders(createErrorResponse('Failed to create tag', 500))
    }

    return addCorsHeaders(createSuccessResponse(newTag, 'Tag created successfully', 201))

  } catch (error) {
    console.error('Error creating tag:', error)
    return addCorsHeaders(createErrorResponse('Failed to create tag', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
