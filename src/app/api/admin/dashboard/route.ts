import { NextRequest, NextResponse } from 'next/server'
import { 
  authenticateToken, 
  createErrorResponse, 
  createSuccessResponse,
  addCorsHeaders,
  rateLimit
} from '@/lib/auth/middleware'
import { DatabaseQuery } from '@/lib/database/connection'

// GET /api/admin/dashboard - Get admin dashboard statistics
export async function GET(request: NextRequest) {
  try {
    // Authentication (Admin only)
    const { user, error } = await authenticateToken(['admin'])(request)
    if (error || !user) {
      return addCorsHeaders(createErrorResponse(error || 'Unauthorized', 401))
    }

    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 50, 15 * 60 * 1000)) {
      return addCorsHeaders(createErrorResponse('Rate limit exceeded', 429))
    }

    // Get dashboard statistics
    const stats = await Promise.all([
      // Total blog posts
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_posts WHERE is_active = true'),
      
      // Published posts
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_posts WHERE status = \'published\' AND is_active = true'),
      
      // Draft posts
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_posts WHERE status = \'draft\' AND is_active = true'),
      
      // Total categories
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_categories WHERE is_active = true'),
      
      // Total tags
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_tags WHERE is_active = true'),
      
      // Total images
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_images WHERE is_active = true'),
      
      // Total comments
      DatabaseQuery.query<{ count: number }>('SELECT COUNT(*) as count FROM blog_comments WHERE status = \'approved\' AND is_active = true'),
      
      // Total views
      DatabaseQuery.query<{ total_views: number }>('SELECT SUM(view_count) as total_views FROM blog_posts WHERE is_active = true'),
      
      // Recent posts (last 5)
      DatabaseQuery.query(`
        SELECT bp.id, bp.title, bp.slug, bp.status, bp.published_at, bp.view_count,
               ba.name as author_name, bc.name as category_name
        FROM blog_posts bp
        LEFT JOIN blog_authors ba ON bp.author_id = ba.id
        LEFT JOIN blog_categories bc ON bp.category_id = bc.id
        WHERE bp.is_active = true
        ORDER BY bp.created_at DESC
        LIMIT 5
      `),
      
      // Popular posts (top 5 by views)
      DatabaseQuery.query(`
        SELECT bp.id, bp.title, bp.slug, bp.view_count,
               ba.name as author_name, bc.name as category_name
        FROM blog_posts bp
        LEFT JOIN blog_authors ba ON bp.author_id = ba.id
        LEFT JOIN blog_categories bc ON bp.category_id = bc.id
        WHERE bp.is_active = true AND bp.status = 'published'
        ORDER BY bp.view_count DESC
        LIMIT 5
      `),
      
      // Posts by status
      DatabaseQuery.query(`
        SELECT status, COUNT(*) as count
        FROM blog_posts
        WHERE is_active = true
        GROUP BY status
      `),
      
      // Posts by category
      DatabaseQuery.query(`
        SELECT bc.name as category_name, COUNT(bp.id) as count
        FROM blog_categories bc
        LEFT JOIN blog_posts bp ON bc.id = bp.category_id AND bp.is_active = true
        WHERE bc.is_active = true
        GROUP BY bc.id, bc.name
        ORDER BY count DESC
      `)
    ])

    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      totalCategories,
      totalTags,
      totalImages,
      totalComments,
      totalViews,
      recentPosts,
      popularPosts,
      postsByStatus,
      postsByCategory
    ] = stats

    const dashboardData = {
      overview: {
        total_posts: totalPosts[0]?.count || 0,
        published_posts: publishedPosts[0]?.count || 0,
        draft_posts: draftPosts[0]?.count || 0,
        total_categories: totalCategories[0]?.count || 0,
        total_tags: totalTags[0]?.count || 0,
        total_images: totalImages[0]?.count || 0,
        total_comments: totalComments[0]?.count || 0,
        total_views: totalViews[0]?.total_views || 0
      },
      recent_posts: recentPosts,
      popular_posts: popularPosts,
      posts_by_status: postsByStatus,
      posts_by_category: postsByCategory
    }

    return addCorsHeaders(createSuccessResponse(dashboardData))

  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return addCorsHeaders(createErrorResponse('Failed to fetch dashboard data', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
