import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { AdminUser } from '../database/schema'

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h'

export interface AuthenticatedUser {
  id: string
  username: string
  email: string
  role: string
  permissions: string[]
}

export interface JWTPayload {
  userId: string
  username: string
  email: string
  role: string
  permissions: string[]
  iat: number
  exp: number
}

// Generate JWT token
export function generateToken(user: AdminUser): string {
  const payload: Omit<JWTPayload, 'iat' | 'exp'> = {
    userId: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    permissions: user.permissions
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}

// Extract token from request
export function extractToken(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader) {
    return null
  }

  const [bearer, token] = authHeader.split(' ')
  
  if (bearer !== 'Bearer' || !token) {
    return null
  }

  return token
}

// Authentication middleware
export function authenticateToken(requiredPermissions: string[] = []) {
  return async (request: NextRequest): Promise<{ user: AuthenticatedUser | null; error: string | null }> => {
    try {
      const token = extractToken(request)
      
      if (!token) {
        return { user: null, error: 'No token provided' }
      }

      const payload = verifyToken(token)
      
      if (!payload) {
        return { user: null, error: 'Invalid token' }
      }

      // Check if token is expired
      if (payload.exp < Date.now() / 1000) {
        return { user: null, error: 'Token expired' }
      }

      const user: AuthenticatedUser = {
        id: payload.userId,
        username: payload.username,
        email: payload.email,
        role: payload.role,
        permissions: payload.permissions
      }

      // Check permissions if required
      if (requiredPermissions.length > 0) {
        const hasPermission = requiredPermissions.some(permission => 
          user.permissions.includes(permission) || user.role === 'admin'
        )

        if (!hasPermission) {
          return { user: null, error: 'Insufficient permissions' }
        }
      }

      return { user, error: null }
    } catch (error) {
      console.error('Authentication error:', error)
      return { user: null, error: 'Authentication failed' }
    }
  }
}

// Role-based access control
export function requireRole(roles: string[]) {
  return (user: AuthenticatedUser): boolean => {
    return roles.includes(user.role)
  }
}

// Permission-based access control
export function requirePermission(permissions: string[]) {
  return (user: AuthenticatedUser): boolean => {
    return permissions.some(permission => 
      user.permissions.includes(permission) || user.role === 'admin'
    )
  }
}

// Admin-only middleware
export const requireAdmin = authenticateToken(['admin'])

// Editor or Admin middleware
export const requireEditor = authenticateToken(['admin', 'editor'])

// Author or above middleware
export const requireAuthor = authenticateToken(['admin', 'editor', 'author'])

// Create error response
export function createErrorResponse(
  message: string, 
  status: number = 401
): NextResponse {
  return NextResponse.json(
    { success: false, error: message },
    { status }
  )
}

// Create success response
export function createSuccessResponse<T>(
  data: T, 
  message?: string,
  status: number = 200
): NextResponse {
  return NextResponse.json(
    { success: true, data, message },
    { status }
  )
}

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): boolean {
  const now = Date.now()
  const key = identifier
  const current = rateLimitMap.get(key)

  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (current.count >= maxRequests) {
    return false
  }

  current.count++
  return true
}

// CORS headers
export function addCorsHeaders(response: NextResponse): NextResponse {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return response
}

// Request validation
export function validateRequest<T>(
  body: any,
  schema: Record<keyof T, (value: any) => boolean>
): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  Object.entries(schema).forEach(([key, validator]) => {
    if (!validator(body[key])) {
      errors.push(`Invalid ${key}`)
    }
  })

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Common validators
export const validators = {
  required: (value: any) => value !== undefined && value !== null && value !== '',
  string: (value: any) => typeof value === 'string',
  number: (value: any) => typeof value === 'number' && !isNaN(value),
  boolean: (value: any) => typeof value === 'boolean',
  email: (value: any) => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  url: (value: any) => typeof value === 'string' && /^https?:\/\/.+/.test(value),
  slug: (value: any) => typeof value === 'string' && /^[a-z0-9-]+$/.test(value),
  array: (value: any) => Array.isArray(value),
  minLength: (min: number) => (value: any) => typeof value === 'string' && value.length >= min,
  maxLength: (max: number) => (value: any) => typeof value === 'string' && value.length <= max,
  oneOf: (options: any[]) => (value: any) => options.includes(value)
}
