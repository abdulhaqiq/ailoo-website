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
  BlogImage, 
  ImageUploadRequest,
  ApiResponse 
} from '@/lib/database/schema'

// GET /api/blog/images - Get all images
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
    const tag = searchParams.get('tag')

    let query = `
      SELECT * FROM blog_images 
      WHERE is_active = true
    `

    if (includeInactive) {
      query = `SELECT * FROM blog_images`
    }

    if (search) {
      query += ` AND (LOWER(original_name) LIKE LOWER('%${search}%') 
                 OR LOWER(alt_text) LIKE LOWER('%${search}%')
                 OR LOWER(caption) LIKE LOWER('%${search}%'))`
    }

    if (tag) {
      query += ` AND $1 = ANY(tags)`
    }

    query += ` ORDER BY created_at DESC`

    const params = tag ? [tag] : []
    const images = await DatabaseQuery.query<BlogImage>(query, params)

    const response: ApiResponse<BlogImage[]> = {
      success: true,
      data: images
    }

    return addCorsHeaders(createSuccessResponse(response))

  } catch (error) {
    console.error('Error fetching images:', error)
    return addCorsHeaders(createErrorResponse('Failed to fetch images', 500))
  }
}

// POST /api/blog/images - Upload new image (Admin/Editor only)
export async function POST(request: NextRequest) {
  try {
    // Authentication
    const { user, error } = await authenticateToken(['admin', 'editor'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 20, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const altText = formData.get('alt_text') as string
    const caption = formData.get('caption') as string
    const tags = formData.get('tags') as string

    if (!file) {
      return addCorsHeaders(createErrorResponse('No file provided', 400))
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return addCorsHeaders(createErrorResponse('Invalid file type. Only images are allowed.', 400))
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return addCorsHeaders(createErrorResponse('File too large. Maximum size is 10MB.', 400))
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()
    const filename = `${timestamp}_${randomString}.${fileExtension}`

    // In a real implementation, you would upload to a cloud storage service like AWS S3, Cloudinary, etc.
    // For now, we'll simulate the upload process
    const uploadUrl = `/uploads/blog/${filename}`
    
    // Simulate image processing to get dimensions
    const imageDimensions = await getImageDimensions(file)
    
    // Parse tags
    const imageTags = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []

    // Create image record
    const imageData = {
      id: crypto.randomUUID(),
      filename,
      original_name: file.name,
      url: uploadUrl,
      alt_text: altText || null,
      caption: caption || null,
      tags: imageTags,
      metadata: {
        width: imageDimensions.width,
        height: imageDimensions.height,
        size: file.size,
        mime_type: file.type
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_active: true
    }

    const insertQuery = `
      INSERT INTO blog_images (
        id, filename, original_name, url, alt_text, caption, tags, metadata, 
        created_at, updated_at, is_active
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `

    const result = await DatabaseQuery.query<BlogImage>(insertQuery, Object.values(imageData))
    const newImage = result[0]

    if (!newImage) {
      return addCorsHeaders(createErrorResponse('Failed to save image record', 500))
    }

    // In a real implementation, you would save the file to storage here
    // await saveFileToStorage(file, filename)

    return addCorsHeaders(createSuccessResponse(newImage, 'Image uploaded successfully', 201))

  } catch (error) {
    console.error('Error uploading image:', error)
    return addCorsHeaders(createErrorResponse('Failed to upload image', 500))
  }
}

// Helper function to get image dimensions
async function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    
    img.onload = () => {
      resolve({ width: img.width, height: img.height })
      URL.revokeObjectURL(url)
    }
    
    img.onerror = () => {
      resolve({ width: 0, height: 0 })
      URL.revokeObjectURL(url)
    }
    
    img.src = url
  })
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
