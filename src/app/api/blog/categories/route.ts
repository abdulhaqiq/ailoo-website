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
  BlogCategory, 
  CreateCategoryRequest,
  ApiResponse 
} from '@/lib/database/schema'

// GET /api/blog/categories - Get all categories
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 100, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const { searchParams } = new URL(request.url)
    const includeInactive = searchParams.get('include_inactive') === 'true'

    let query = `
      SELECT * FROM blog_categories 
      WHERE is_active = true
    `

    if (includeInactive) {
      query = `SELECT * FROM blog_categories`
    }

    query += ` ORDER BY name ASC`

    const categories = await DatabaseQuery.query<BlogCategory>(query)

    const response: ApiResponse<BlogCategory[]> = {
      success: true,
      data: categories
    }

    return addCorsHeaders(createSuccessResponse(response))

  } catch (error) {
    console.error('Error fetching categories:', error)
    return addCorsHeaders(createErrorResponse('Failed to fetch categories', 500))
  }
}

// POST /api/blog/categories - Create new category (Admin only)
export async function POST(request: NextRequest) {
  try {
    // Authentication
    const { user, error } = await authenticateToken(['admin'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 20, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const body: CreateCategoryRequest = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      name: validators.required,
      description: validators.required,
      color: validators.required
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

    // Check if category with same slug already exists
    const existingQuery = `SELECT id FROM blog_categories WHERE slug = $1`
    const existing = await DatabaseQuery.query(existingQuery, [slug])
    
    if (existing.length > 0) {
      return addCorsHeaders(createErrorResponse('Category with this slug already exists', 409))
    }

    // Create category
    const categoryData = {
      id: crypto.randomUUID(),
      name: body.name,
      slug,
      description: body.description,
      color: body.color,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_active: true
    }

    const insertQuery = `
      INSERT INTO blog_categories (
        id, name, slug, description, color, created_at, updated_at, is_active
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `

    const result = await DatabaseQuery.query<BlogCategory>(insertQuery, Object.values(categoryData))
    const newCategory = result[0]

    if (!newCategory) {
      return addCorsHeaders(createErrorResponse('Failed to create category', 500))
    }

    return addCorsHeaders(createSuccessResponse(newCategory, 'Category created successfully', 201))

  } catch (error) {
    console.error('Error creating category:', error)
    return addCorsHeaders(createErrorResponse('Failed to create category', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
