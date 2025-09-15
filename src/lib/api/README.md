# Ailoo Blog API Documentation

## Overview
This is a comprehensive blog API system for the Ailoo website with full CRUD operations, authentication, and admin access control.

## Features
- **Authentication**: JWT-based authentication with role-based access control
- **Blog Management**: Full CRUD operations for blog posts, categories, tags, and images
- **Admin Dashboard**: Statistics and management interface
- **Search & Filtering**: Advanced search and filtering capabilities
- **Image Management**: Upload and manage blog images with metadata
- **Rate Limiting**: Built-in rate limiting for API protection
- **CORS Support**: Cross-origin resource sharing enabled

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login

### Blog Posts
- `GET /api/blog/posts` - Get all blog posts (with filtering and pagination)
- `POST /api/blog/posts` - Create new blog post (Admin/Editor/Author)
- `GET /api/blog/posts/[id]` - Get single blog post
- `PUT /api/blog/posts/[id]` - Update blog post (Admin/Editor)
- `DELETE /api/blog/posts/[id]` - Delete blog post (Admin only)

### Categories
- `GET /api/blog/categories` - Get all categories
- `POST /api/blog/categories` - Create new category (Admin only)

### Tags
- `GET /api/blog/tags` - Get all tags
- `POST /api/blog/tags` - Create new tag (Admin/Editor)

### Images
- `GET /api/blog/images` - Get all images
- `POST /api/blog/images` - Upload new image (Admin/Editor)

### Admin Dashboard
- `GET /api/admin/dashboard` - Get dashboard statistics (Admin only)

## Authentication

### Login Request
```json
POST /api/auth/login
{
  "email": "admin@ailoo.com",
  "password": "admin123"
}
```

### Login Response
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user-id",
      "username": "admin",
      "email": "admin@ailoo.com",
      "role": "admin",
      "permissions": ["admin", "editor", "author"]
    },
    "expires_at": "2024-12-31T23:59:59.000Z"
  }
}
```

### Using Authentication
Include the JWT token in the Authorization header:
```
Authorization: Bearer your-jwt-token-here
```

## Blog Posts

### Create Blog Post
```json
POST /api/blog/posts
Authorization: Bearer your-jwt-token

{
  "title": "My Blog Post",
  "excerpt": "This is a brief description",
  "content": "Full blog post content here...",
  "category_id": "category-id",
  "status": "published",
  "is_featured": false,
  "meta_title": "SEO Title",
  "meta_description": "SEO Description",
  "keywords": ["keyword1", "keyword2"],
  "tag_ids": ["tag-id-1", "tag-id-2"],
  "featured_image_id": "image-id"
}
```

### Get Blog Posts with Filters
```
GET /api/blog/posts?search=keyword&category=transportation&tag=tech&status=published&featured=true&page=1&limit=10&sort_by=published_at&sort_order=desc
```

### Update Blog Post
```json
PUT /api/blog/posts/[id]
Authorization: Bearer your-jwt-token

{
  "title": "Updated Title",
  "status": "published",
  "is_featured": true
}
```

## Categories

### Create Category
```json
POST /api/blog/categories
Authorization: Bearer your-jwt-token

{
  "name": "Technology",
  "slug": "technology",
  "description": "Tech-related articles",
  "color": "#3B82F6"
}
```

## Tags

### Create Tag
```json
POST /api/blog/tags
Authorization: Bearer your-jwt-token

{
  "name": "AI",
  "slug": "ai",
  "description": "Artificial Intelligence",
  "color": "#10B981"
}
```

## Images

### Upload Image
```
POST /api/blog/images
Authorization: Bearer your-jwt-token
Content-Type: multipart/form-data

FormData:
- file: [image file]
- alt_text: "Image description"
- caption: "Image caption"
- tags: "tag1,tag2,tag3"
```

## Error Responses

All API endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "message": "Additional details"
}
```

### Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `429` - Rate Limited
- `500` - Internal Server Error

## Rate Limiting

- **Unauthenticated requests**: 100 requests per 15 minutes
- **Authenticated requests**: 50 requests per 15 minutes
- **Login attempts**: 5 attempts per 15 minutes
- **Admin operations**: 20 requests per 15 minutes

## Database Schema

### Tables
- `admin_users` - Admin user accounts
- `blog_categories` - Blog post categories
- `blog_tags` - Blog post tags
- `blog_authors` - Blog post authors
- `blog_images` - Uploaded images
- `blog_posts` - Blog posts
- `blog_comments` - Blog post comments

### Key Features
- UUID primary keys
- Soft deletes (is_active flag)
- Timestamps (created_at, updated_at)
- JSONB for flexible data storage
- Full-text search support
- Optimized indexes

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install bcryptjs jsonwebtoken
   npm install -D @types/bcryptjs @types/jsonwebtoken
   ```

2. **Environment Variables**
   Create a `.env` file with the required configuration:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=ailoo_blog
   DB_USER=postgres
   DB_PASSWORD=your_password
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=24h
   ```

3. **Database Setup**
   The API includes migration scripts to create all necessary tables and seed initial data.

4. **Default Admin Account**
   - Email: `admin@ailoo.com`
   - Password: `admin123`
   - Role: `admin`

## Security Features

- JWT-based authentication
- Role-based access control (Admin, Editor, Author)
- Password hashing with bcrypt
- Rate limiting
- Input validation
- SQL injection prevention
- CORS protection

## Development Notes

- All database operations use parameterized queries
- Error handling is comprehensive
- Logging is implemented for debugging
- API responses are consistent
- TypeScript types are provided for all data structures
