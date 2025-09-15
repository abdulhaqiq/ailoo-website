// Database schema for blog system
export interface DatabaseConfig {
  host: string
  port: number
  database: string
  username: string
  password: string
  ssl?: boolean
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
  created_at: Date
  updated_at: Date
  is_active: boolean
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  description?: string
  color?: string
  created_at: Date
  updated_at: Date
  is_active: boolean
}

export interface BlogImage {
  id: string
  filename: string
  original_name: string
  url: string
  alt_text?: string
  caption?: string
  tags: string[]
  metadata: {
    width: number
    height: number
    size: number
    mime_type: string
  }
  created_at: Date
  updated_at: Date
  is_active: boolean
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_id?: string
  author_id: string
  category_id: string
  status: 'draft' | 'published' | 'archived'
  is_featured: boolean
  meta_title?: string
  meta_description?: string
  keywords: string[]
  tags: string[]
  reading_time: number
  view_count: number
  published_at?: Date
  created_at: Date
  updated_at: Date
  is_active: boolean
}

export interface BlogAuthor {
  id: string
  name: string
  email: string
  avatar_url?: string
  bio?: string
  social_links?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  created_at: Date
  updated_at: Date
  is_active: boolean
}

export interface AdminUser {
  id: string
  username: string
  email: string
  password_hash: string
  role: 'admin' | 'editor' | 'author'
  permissions: string[]
  last_login?: Date
  created_at: Date
  updated_at: Date
  is_active: boolean
}

export interface BlogComment {
  id: string
  post_id: string
  author_name: string
  author_email: string
  content: string
  status: 'pending' | 'approved' | 'rejected'
  parent_id?: string
  created_at: Date
  updated_at: Date
  is_active: boolean
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  pagination?: {
    page: number
    limit: number
    total: number
    total_pages: number
  }
}

export interface BlogPostWithRelations extends BlogPost {
  category: BlogCategory
  author: BlogAuthor
  featured_image?: BlogImage
  tags: BlogTag[]
  comments_count: number
}

export interface BlogSearchFilters {
  search?: string
  category?: string
  tag?: string
  author?: string
  status?: string
  is_featured?: boolean
  date_from?: string
  date_to?: string
  sort_by?: 'created_at' | 'updated_at' | 'published_at' | 'title' | 'view_count'
  sort_order?: 'asc' | 'desc'
  page?: number
  limit?: number
}

export interface CreateBlogPostRequest {
  title: string
  slug?: string
  excerpt: string
  content: string
  featured_image_id?: string
  category_id: string
  status: 'draft' | 'published'
  is_featured?: boolean
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  tag_ids?: string[]
  published_at?: string
}

export interface UpdateBlogPostRequest extends Partial<CreateBlogPostRequest> {
  id: string
}

export interface CreateCategoryRequest {
  name: string
  slug?: string
  description: string
  color: string
}

export interface CreateTagRequest {
  name: string
  slug?: string
  description?: string
  color?: string
}

export interface CreateAuthorRequest {
  name: string
  email: string
  avatar_url?: string
  bio?: string
  social_links?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface ImageUploadRequest {
  file: File
  alt_text?: string
  caption?: string
  tags?: string[]
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: {
    id: string
    username: string
    email: string
    role: string
    permissions: string[]
  }
  expires_at: string
}
