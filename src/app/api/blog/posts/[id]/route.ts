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
  UpdateBlogPostRequest,
  ApiResponse 
} from '@/lib/database/schema'

// GET /api/blog/posts/[id] - Get single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 100, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const { id } = params

    if (!id) {
      return addCorsHeaders(createErrorResponse('Post ID is required', 400))
    }

    // Get blog post with relations
    const query = `
      SELECT 
        bp.*,
        bc.name as category_name,
        bc.slug as category_slug,
        bc.color as category_color,
        bc.description as category_description,
        ba.name as author_name,
        ba.email as author_email,
        ba.avatar_url as author_avatar,
        ba.bio as author_bio,
        ba.social_links as author_social_links,
        bi.url as featured_image_url,
        bi.alt_text as featured_image_alt,
        bi.caption as featured_image_caption,
        (SELECT COUNT(*) FROM blog_comments WHERE post_id = bp.id AND status = 'approved') as comments_count
      FROM blog_posts bp
      LEFT JOIN blog_categories bc ON bp.category_id = bc.id
      LEFT JOIN blog_authors ba ON bp.author_id = ba.id
      LEFT JOIN blog_images bi ON bp.featured_image_id = bi.id
      WHERE bp.id = $1 AND bp.is_active = true
    `

    const posts = await DatabaseQuery.query<BlogPostWithRelations>(query, [id])
    const post = posts[0]

    if (!post) {
      return addCorsHeaders(createErrorResponse('Blog post not found', 404))
    }

    // Increment view count
    const updateViewQuery = `
      UPDATE blog_posts 
      SET view_count = view_count + 1 
      WHERE id = $1
    `
    await DatabaseQuery.query(updateViewQuery, [id])

    return addCorsHeaders(createSuccessResponse(post))

  } catch (error) {
    console.error('Error fetching blog post:', error)
    return addCorsHeaders(createErrorResponse('Failed to fetch blog post', 500))
  }
}

// PUT /api/blog/posts/[id] - Update blog post (Admin/Editor only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Authentication
    const { user, error } = await authenticateToken(['admin', 'editor'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 50, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const { id } = params
    const body: Partial<UpdateBlogPostRequest> = await request.json()

    if (!id) {
      return addCorsHeaders(createErrorResponse('Post ID is required', 400))
    }

    // Check if post exists
    const existingPostQuery = `
      SELECT id, author_id, status FROM blog_posts 
      WHERE id = $1 AND is_active = true
    `
    const existingPosts = await DatabaseQuery.query<{ id: string; author_id: string; status: string }>(existingPostQuery, [id])
    const existingPost = existingPosts[0]

    if (!existingPost) {
      return addCorsHeaders(createErrorResponse('Blog post not found', 404))
    }

    // Check permissions (authors can only edit their own posts unless they're admin/editor)
    if (user.role === 'author' && existingPost.author_id !== user.id) {
      return addCorsHeaders(createErrorResponse('You can only edit your own posts', 403))
    }

    // Validate request
    const validation = validateRequest(body, {
      title: (value) => !value || validators.required(value),
      excerpt: (value) => !value || validators.required(value),
      content: (value) => !value || validators.required(value),
      status: (value) => !value || validators.oneOf(['draft', 'published', 'archived'])(value)
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    // Prepare update data
    const updateFields: string[] = []
    const updateValues: any[] = []
    let paramIndex = 1

    if (body.title) {
      updateFields.push(`title = $${paramIndex++}`)
      updateValues.push(body.title)
    }

    if (body.slug) {
      updateFields.push(`slug = $${paramIndex++}`)
      updateValues.push(body.slug)
    }

    if (body.excerpt) {
      updateFields.push(`excerpt = $${paramIndex++}`)
      updateValues.push(body.excerpt)
    }

    if (body.content) {
      updateFields.push(`content = $${paramIndex++}`)
      updateValues.push(body.content)
      
      // Recalculate reading time
      const wordCount = body.content.split(/\s+/).length
      const readingTime = Math.ceil(wordCount / 200)
      updateFields.push(`reading_time = $${paramIndex++}`)
      updateValues.push(readingTime)
    }

    if (body.featured_image_id !== undefined) {
      updateFields.push(`featured_image_id = $${paramIndex++}`)
      updateValues.push(body.featured_image_id)
    }

    if (body.category_id) {
      updateFields.push(`category_id = $${paramIndex++}`)
      updateValues.push(body.category_id)
    }

    if (body.status) {
      updateFields.push(`status = $${paramIndex++}`)
      updateValues.push(body.status)
      
      // Set published_at if status changes to published
      if (body.status === 'published') {
        updateFields.push(`published_at = $${paramIndex++}`)
        updateValues.push(new Date().toISOString())
      }
    }

    if (body.is_featured !== undefined) {
      updateFields.push(`is_featured = $${paramIndex++}`)
      updateValues.push(body.is_featured)
    }

    if (body.meta_title) {
      updateFields.push(`meta_title = $${paramIndex++}`)
      updateValues.push(body.meta_title)
    }

    if (body.meta_description) {
      updateFields.push(`meta_description = $${paramIndex++}`)
      updateValues.push(body.meta_description)
    }

    if (body.keywords) {
      updateFields.push(`keywords = $${paramIndex++}`)
      updateValues.push(JSON.stringify(body.keywords))
    }

    if (body.tag_ids) {
      updateFields.push(`tags = $${paramIndex++}`)
      updateValues.push(JSON.stringify(body.tag_ids))
    }

    // Always update the updated_at timestamp
    updateFields.push(`updated_at = $${paramIndex++}`)
    updateValues.push(new Date().toISOString())

    if (updateFields.length === 0) {
      return addCorsHeaders(createErrorResponse('No fields to update', 400))
    }

    // Add the ID parameter
    updateValues.push(id)

    const updateQuery = `
      UPDATE blog_posts 
      SET ${updateFields.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `

    const result = await DatabaseQuery.query<BlogPost>(updateQuery, updateValues)
    const updatedPost = result[0]

    if (!updatedPost) {
      return addCorsHeaders(createErrorResponse('Failed to update blog post', 500))
    }

    return addCorsHeaders(createSuccessResponse(updatedPost, 'Blog post updated successfully'))

  } catch (error) {
    console.error('Error updating blog post:', error)
    return addCorsHeaders(createErrorResponse('Failed to update blog post', 500))
  }
}

// DELETE /api/blog/posts/[id] - Delete blog post (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Authentication (Admin only)
    const { user, error } = await authenticateToken(['admin'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 20, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    const { id } = params

    if (!id) {
      return addCorsHeaders(createErrorResponse('Post ID is required', 400))
    }

    // Soft delete (mark as inactive)
    const deleteQuery = `
      UPDATE blog_posts 
      SET is_active = false, updated_at = $1
      WHERE id = $2
      RETURNING id, title
    `

    const result = await DatabaseQuery.query<{ id: string; title: string }>(deleteQuery, [new Date().toISOString(), id])
    const deletedPost = result[0]

    if (!deletedPost) {
      return addCorsHeaders(createErrorResponse('Blog post not found', 404))
    }

    return addCorsHeaders(createSuccessResponse(
      { id: deletedPost.id, title: deletedPost.title },
      'Blog post deleted successfully'
    ))

  } catch (error) {
    console.error('Error deleting blog post:', error)
    return addCorsHeaders(createErrorResponse('Failed to delete blog post', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
