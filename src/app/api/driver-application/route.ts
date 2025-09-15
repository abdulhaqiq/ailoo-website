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

interface DriverApplication {
  fullName: string
  email: string
  phone: string
  city: string
  experience: string
  vehicleType: string
  licenseNumber: string
  message?: string
}

// POST /api/driver-application - Submit driver application
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 5, 15 * 60 * 1000)) { // 5 applications per 15 minutes
      return addCorsHeaders(createErrorResponse('Too many applications. Please try again later.', 429))
    }

    const body: DriverApplication = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      fullName: validators.required,
      email: validators.email,
      phone: validators.required,
      city: validators.required,
      experience: validators.required,
      vehicleType: validators.required,
      licenseNumber: validators.required
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    const { fullName, email, phone, city, experience, vehicleType, licenseNumber, message } = body

    // Insert driver application
    const insertQuery = `
      INSERT INTO driver_applications (
        id, full_name, email, phone, city, experience, vehicle_type, 
        license_number, message, ip_address, user_agent
      )
      VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id, created_at
    `

    const result = await DatabaseQuery.query(insertQuery, [
      fullName,
      email,
      phone,
      city,
      experience,
      vehicleType,
      licenseNumber,
      message || null,
      clientIP,
      request.headers.get('user-agent') || null
    ])

    const application = result[0]

    if (!application) {
      return addCorsHeaders(createErrorResponse('Failed to submit driver application', 500))
    }

    return addCorsHeaders(createSuccessResponse(
      { id: application.id, submitted_at: application.created_at },
      'Driver application submitted successfully',
      201
    ))

  } catch (error) {
    console.error('Error submitting driver application:', error)
    return addCorsHeaders(createErrorResponse('Failed to submit driver application', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
