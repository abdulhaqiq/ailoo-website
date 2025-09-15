import { NextRequest, NextResponse } from 'next/server'
import { 
  createErrorResponse, 
  createSuccessResponse,
  addCorsHeaders,
  validateRequest,
  validators,
  rateLimit,
  generateToken
} from '@/lib/auth/middleware'
import { DatabaseQuery } from '@/lib/database/connection'
import { 
  LoginRequest,
  LoginResponse,
  AdminUser 
} from '@/lib/database/schema'
import bcrypt from 'bcryptjs'

// POST /api/auth/login - Admin login
export async function POST(request: NextRequest) {
  try {
    // Rate limiting for login attempts
    const clientIP = request.ip || 'unknown'
    if (!rateLimit(clientIP, 5, 15 * 60 * 1000)) { // 5 attempts per 15 minutes
      return addCorsHeaders(createErrorResponse('Too many login attempts. Please try again later.', 429))
    }

    const body: LoginRequest = await request.json()

    // Validate request
    const validation = validateRequest(body, {
      email: validators.email,
      password: validators.required
    })

    if (!validation.isValid) {
      return addCorsHeaders(createErrorResponse(`Validation failed: ${validation.errors.join(', ')}`, 400))
    }

    const { email, password } = body

    // Find user by email
    const userQuery = `
      SELECT id, username, email, password_hash, role, permissions, is_active, last_login
      FROM admin_users 
      WHERE email = $1 AND is_active = true
    `

    const users = await DatabaseQuery.query<AdminUser>(userQuery, [email])
    const user = users[0]

    if (!user) {
      return addCorsHeaders(createErrorResponse('Invalid credentials', 401))
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash)
    if (!isPasswordValid) {
      return addCorsHeaders(createErrorResponse('Invalid credentials', 401))
    }

    // Generate JWT token
    const token = generateToken(user)

    // Update last login
    const updateLoginQuery = `
      UPDATE admin_users 
      SET last_login = $1 
      WHERE id = $2
    `
    await DatabaseQuery.query(updateLoginQuery, [new Date().toISOString(), user.id])

    // Prepare response
    const loginResponse: LoginResponse = {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        permissions: user.permissions
      },
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    }

    return addCorsHeaders(createSuccessResponse(loginResponse, 'Login successful'))

  } catch (error) {
    console.error('Error during login:', error)
    return addCorsHeaders(createErrorResponse('Login failed', 500))
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return addCorsHeaders(new NextResponse(null, { status: 200 }))
}
