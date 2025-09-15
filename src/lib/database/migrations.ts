import { DatabaseQuery } from './connection'

// Database migration script
export async function runMigrations(): Promise<void> {
  try {
    console.log('Starting database migrations...')

    // Create admin_users table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'editor', 'author')),
        permissions TEXT[] DEFAULT '{}',
        last_login TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create blog_categories table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS blog_categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        color VARCHAR(7) DEFAULT '#6B7280',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create blog_tags table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS blog_tags (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(50) NOT NULL,
        slug VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        color VARCHAR(7) DEFAULT '#6B7280',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create blog_authors table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS blog_authors (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        avatar_url VARCHAR(255),
        bio TEXT,
        social_links JSONB DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create blog_images table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS blog_images (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        filename VARCHAR(255) NOT NULL,
        original_name VARCHAR(255) NOT NULL,
        url VARCHAR(500) NOT NULL,
        alt_text VARCHAR(255),
        caption TEXT,
        tags TEXT[] DEFAULT '{}',
        metadata JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create blog_posts table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        featured_image_id UUID REFERENCES blog_images(id),
        author_id UUID NOT NULL REFERENCES blog_authors(id),
        category_id UUID NOT NULL REFERENCES blog_categories(id),
        status VARCHAR(20) NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
        is_featured BOOLEAN DEFAULT false,
        meta_title VARCHAR(255),
        meta_description TEXT,
        keywords TEXT[] DEFAULT '{}',
        tags TEXT[] DEFAULT '{}',
        reading_time INTEGER DEFAULT 0,
        view_count INTEGER DEFAULT 0,
        published_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create blog_comments table
    await DatabaseQuery.query(`
      CREATE TABLE IF NOT EXISTS blog_comments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
        author_name VARCHAR(100) NOT NULL,
        author_email VARCHAR(100) NOT NULL,
        content TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
        parent_id UUID REFERENCES blog_comments(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      )
    `)

    // Create indexes for better performance
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(is_featured);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_active ON blog_posts(is_active);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_comments_post ON blog_comments(post_id);
    `)
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_comments_status ON blog_comments(status);
    `)

    // Create full-text search indexes
    await DatabaseQuery.query(`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_search 
      ON blog_posts USING gin(to_tsvector('english', title || ' ' || excerpt || ' ' || content));
    `)

    console.log('Database migrations completed successfully!')

  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  }
}

// Seed initial data
export async function seedInitialData(): Promise<void> {
  try {
    console.log('Seeding initial data...')

    // Check if admin user already exists
    const existingAdmin = await DatabaseQuery.query(
      'SELECT id FROM admin_users WHERE email = $1',
      ['admin@ailoo.com']
    )

    if (existingAdmin.length === 0) {
      // Create default admin user
      const bcrypt = require('bcryptjs')
      const hashedPassword = await bcrypt.hash('admin123', 10)

      await DatabaseQuery.query(`
        INSERT INTO admin_users (id, username, email, password_hash, role, permissions)
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [
        '00000000-0000-0000-0000-000000000001',
        'admin',
        'admin@ailoo.com',
        hashedPassword,
        'admin',
        JSON.stringify(['admin', 'editor', 'author'])
      ])

      console.log('Default admin user created: admin@ailoo.com / admin123')
    }

    // Check if categories exist
    const existingCategories = await DatabaseQuery.query(
      'SELECT COUNT(*) as count FROM blog_categories'
    )

    if (existingCategories[0]?.count === 0) {
      // Create default categories
      const defaultCategories = [
        {
          id: '00000000-0000-0000-0000-000000000001',
          name: 'Transportation',
          slug: 'transportation',
          description: 'Articles about transportation services and mobility solutions',
          color: '#3B82F6'
        },
        {
          id: '00000000-0000-0000-0000-000000000002',
          name: 'Technology',
          slug: 'technology',
          description: 'Technology updates and innovations',
          color: '#10B981'
        },
        {
          id: '00000000-0000-0000-0000-000000000003',
          name: 'Business',
          slug: 'business',
          description: 'Business insights and industry news',
          color: '#F59E0B'
        },
        {
          id: '00000000-0000-0000-0000-000000000004',
          name: 'Lifestyle',
          slug: 'lifestyle',
          description: 'Lifestyle and travel content',
          color: '#EF4444'
        }
      ]

      for (const category of defaultCategories) {
        await DatabaseQuery.query(`
          INSERT INTO blog_categories (id, name, slug, description, color)
          VALUES ($1, $2, $3, $4, $5)
        `, Object.values(category))
      }

      console.log('Default categories created')
    }

    // Check if author exists
    const existingAuthors = await DatabaseQuery.query(
      'SELECT COUNT(*) as count FROM blog_authors'
    )

    if (existingAuthors[0]?.count === 0) {
      // Create default author
      await DatabaseQuery.query(`
        INSERT INTO blog_authors (id, name, email, bio, social_links)
        VALUES ($1, $2, $3, $4, $5)
      `, [
        '00000000-0000-0000-0000-000000000001',
        'Ailoo Team',
        'team@ailoo.com',
        'The official Ailoo team sharing insights about transportation and technology.',
        JSON.stringify({
          twitter: 'https://twitter.com/ailoo',
          linkedin: 'https://linkedin.com/company/ailoo'
        })
      ])

      console.log('Default author created')
    }

    console.log('Initial data seeding completed!')

  } catch (error) {
    console.error('Seeding failed:', error)
    throw error
  }
}

// Initialize database with migrations and seed data
export async function initializeDatabaseWithData(): Promise<void> {
  try {
    await runMigrations()
    await seedInitialData()
    console.log('Database initialization completed successfully!')
  } catch (error) {
    console.error('Database initialization failed:', error)
    throw error
  }
}
