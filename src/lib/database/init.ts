import { readFileSync } from 'fs'
import { join } from 'path'
import { DatabaseQuery, initializeDatabase } from './connection'

export async function initializeDatabaseSchema(): Promise<void> {
  try {
    console.log('Initializing database schema...')
    
    // Initialize database connection
    await initializeDatabase()
    
    // Read and execute the SQL schema
    const schemaPath = join(process.cwd(), 'src', 'lib', 'database', 'init.sql')
    const schema = readFileSync(schemaPath, 'utf8')
    
    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))
    
    // Execute each statement
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await DatabaseQuery.query(statement)
          console.log('✓ Executed:', statement.substring(0, 50) + '...')
        } catch (error) {
          // Ignore errors for statements that might already exist
          if (error instanceof Error && error.message.includes('already exists')) {
            console.log('⚠ Skipped (already exists):', statement.substring(0, 50) + '...')
          } else {
            console.error('✗ Error executing statement:', statement.substring(0, 50) + '...', error)
          }
        }
      }
    }
    
    console.log('✅ Database schema initialized successfully!')
  } catch (error) {
    console.error('❌ Failed to initialize database schema:', error)
    throw error
  }
}

// Run initialization if this file is executed directly
if (require.main === module) {
  initializeDatabaseSchema()
    .then(() => {
      console.log('Database initialization completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Database initialization failed:', error)
      process.exit(1)
    })
}
