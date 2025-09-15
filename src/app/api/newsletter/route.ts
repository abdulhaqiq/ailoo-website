import { NextRequest, NextResponse } from 'next/server'
import { 
  createErrorResponse, 
  createSuccessResponse,
  addCorsHeaders,
  validateRequest,
  validators,
  rateLimit
} from '@/lib/auth/middleware'
import { DatabaseQuery } from '@/lib/database/connection'

interface NewsletterSubscription {
  email: string
  source?: string
}

// POST /api/newsletter - Subscribe to newsletter
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 10, 15 * 60 * 1000)) { // 10 subscriptions per 15 minutes
      return addCorsHeaders(createErrorResponse('Too many subscription attempts. Please try again later.', 429))
    }

    const body: NewsletterSubscription = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      email: validators.email
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    const { email, source } = body

    // Check if email already exists
    const existingQuery = `
      SELECT id, status FROM newsletter_subscriptions 
      WHERE email = $1
    `
    const existing = await DatabaseQuery.query(existingQuery, [email])

    if (existing.length > 0) {
      const subscription = existing[0]
      if (subscription.status === 'active') {
        return addCorsHeaders(createErrorResponse('Email is already subscribed to newsletter', 409))
      } else {
        // Reactivate subscription
        const updateQuery = `
          UPDATE newsletter_subscriptions 
          SET status = 'active', subscribed_at = CURRENT_TIMESTAMP, unsubscribed_at = NULL
          WHERE email = $1
          RETURNING id, subscribed_at
        `
        const result = await DatabaseQuery.query(updateQuery, [email])
        const updated = result[0]

        return addCorsHeaders(createSuccessResponse(
          { id: updated.id, subscribed_at: updated.subscribed_at },
          'Newsletter subscription reactivated successfully',
          200
        ))
      }
    }

    // Insert new subscription
    const insertQuery = `
      INSERT INTO newsletter_subscriptions (id, email, source, ip_address)
      VALUES (uuid_generate_v4(), $1, $2, $3)
      RETURNING id, subscribed_at
    `

    const result = await DatabaseQuery.query(insertQuery, [
      email,
      source || 'website',
      clientIP
    ])

    const subscription = result[0]

    if (!subscription) {
      return addCorsHeaders(createErrorResponse('Failed to subscribe to newsletter', 500))
    }

    return addCorsHeaders(createSuccessResponse(
      { id: subscription.id, subscribed_at: subscription.subscribed_at },
      'Successfully subscribed to newsletter',
      201
    ))

  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return addCorsHeaders(createErrorResponse('Failed to subscribe to newsletter', 500))
  }
}

// DELETE /api/newsletter - Unsubscribe from newsletter
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return addCorsHeaders(createErrorResponse('Email is required', 400))
    }

    // Validate email format
    if (!validators.email(email)) {
      return addCorsHeaders(createErrorResponse('Invalid email format', 400))
    }

    // Update subscription status
    const updateQuery = `
      UPDATE newsletter_subscriptions 
      SET status = 'unsubscribed', unsubscribed_at = CURRENT_TIMESTAMP
      WHERE email = $1 AND status = 'active'
      RETURNING id
    `

    const result = await DatabaseQuery.query(updateQuery, [email])

    if (result.length === 0) {
      return addCorsHeaders(createErrorResponse('Email not found or already unsubscribed', 404))
    }

    return addCorsHeaders(createSuccessResponse(
      { unsubscribed: true },
      'Successfully unsubscribed from newsletter',
      200
    ))

  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error)
    return addCorsHeaders(createErrorResponse('Failed to unsubscribe from newsletter', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
