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

interface HomeRentalApplication {
  fullName: string
  email: string
  phone: string
  city: string
  propertyType: string
  subscriptionPlan: string
  message?: string
}

// POST /api/home-rental-application - Submit home rental application
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 5, 15 * 60 * 1000)) { // 5 applications per 15 minutes
      return addCorsHeaders(createErrorResponse('Too many applications. Please try again later.', 429))
    }

    const body: HomeRentalApplication = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      fullName: validators.required,
      email: validators.email,
      phone: validators.required,
      city: validators.required,
      propertyType: validators.required,
      subscriptionPlan: validators.required
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    const { fullName, email, phone, city, propertyType, subscriptionPlan, message } = body

    // Insert home rental application
    const insertQuery = `
      INSERT INTO home_rental_applications (
        id, full_name, email, phone, city, property_type, 
        subscription_plan, message, ip_address, user_agent
      )
      VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, created_at
    `

    const result = await DatabaseQuery.query(insertQuery, [
      fullName,
      email,
      phone,
      city,
      propertyType,
      subscriptionPlan,
      message || null,
      clientIP,
      request.headers.get('user-agent') || null
    ])

    const application = result[0]

    if (!application) {
      return addCorsHeaders(createErrorResponse('Failed to submit home rental application', 500))
    }

    return addCorsHeaders(createSuccessResponse(
      { id: application.id, submitted_at: application.created_at },
      'Home rental application submitted successfully',
      201
    ))

  } catch (error) {
    console.error('Error submitting home rental application:', error)
    return addCorsHeaders(createErrorResponse('Failed to submit home rental application', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
