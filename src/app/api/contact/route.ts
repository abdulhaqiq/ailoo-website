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

interface ContactSubmission {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

// POST /api/contact - Submit contact form
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 10, 15 * 60 * 1000)) { // 10 submissions per 15 minutes
      return addCorsHeaders(createErrorResponse('Too many submissions. Please try again later.', 429))
    }

    const body: ContactSubmission = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      name: validators.required,
      email: validators.email,
      message: validators.required
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    const { name, email, phone, subject, message } = body

    // Insert contact submission
    const insertQuery = `
      INSERT INTO contact_submissions (id, name, email, phone, subject, message, ip_address, user_agent)
      VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7)
      RETURNING id, created_at
    `

    const result = await DatabaseQuery.query(insertQuery, [
      name,
      email,
      phone || null,
      subject || null,
      message,
      clientIP,
      request.headers.get('user-agent') || null
    ])

    const submission = result[0]

    if (!submission) {
      return addCorsHeaders(createErrorResponse('Failed to submit contact form', 500))
    }

    return addCorsHeaders(createSuccessResponse(
      { id: submission.id, submitted_at: submission.created_at },
      'Contact form submitted successfully',
      201
    ))

  } catch (error) {
    console.error('Error submitting contact form:', error)
    return addCorsHeaders(createErrorResponse('Failed to submit contact form', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
