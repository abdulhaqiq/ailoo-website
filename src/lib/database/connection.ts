import { Pool, PoolClient } from 'pg'
import { DatabaseConfig } from './schema'

// Database connection configuration
const dbConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'ailoo_website',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  ssl: process.env.NODE_ENV === 'production'
}

// Real PostgreSQL database connection
class DatabaseConnection {
  private static instance: DatabaseConnection
  private pool: Pool | null = null
  private isConnected: boolean = false

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection()
    }
    return DatabaseConnection.instance
  }

  public async connect(): Promise<void> {
    try {
      this.pool = new Pool({
        host: dbConfig.host,
        port: dbConfig.port,
        database: dbConfig.database,
        user: dbConfig.username,
        password: dbConfig.password,
        ssl: dbConfig.ssl ? { rejectUnauthorized: false } : false,
        max: 20, // Maximum number of clients in the pool
        idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
        connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
      })

      // Test the connection
      const client = await this.pool.connect()
      await client.query('SELECT NOW()')
      client.release()
      
      console.log('Connected to PostgreSQL database:', dbConfig.database)
      this.isConnected = true
    } catch (error) {
      console.error('Database connection failed:', error)
      throw error
    }
  }

  public async disconnect(): Promise<void> {
    try {
      if (this.pool) {
        await this.pool.end()
        this.pool = null
      }
      this.isConnected = false
      console.log('Disconnected from database')
    } catch (error) {
      console.error('Database disconnection failed:', error)
      throw error
    }
  }

  public isConnectedToDatabase(): boolean {
    return this.isConnected && this.pool !== null
  }

  public getConfig(): DatabaseConfig {
    return { ...dbConfig }
  }

  public getPool(): Pool | null {
    return this.pool
  }
}

// Database query helper functions
export class DatabaseQuery {
  private static db = DatabaseConnection.getInstance()

  // Generic query executor
  public static async query<T = any>(
    sql: string, 
    params: any[] = []
  ): Promise<T[]> {
    try {
      const pool = this.db.getPool()
      if (!pool) {
        throw new Error('Database not connected')
      }

      console.log('Executing query:', sql, 'with params:', params)
      const result = await pool.query(sql, params)
      return result.rows
    } catch (error) {
      console.error('Database query failed:', error)
      throw error
    }
  }

  // Transaction wrapper
  public static async transaction<T>(
    callback: (client: PoolClient) => Promise<T>
  ): Promise<T> {
    const pool = this.db.getPool()
    if (!pool) {
      throw new Error('Database not connected')
    }

    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const result = await callback(client)
      await client.query('COMMIT')
      return result
    } catch (error) {
      await client.query('ROLLBACK')
      throw error
    } finally {
      client.release()
    }
  }

  // Pagination helper
  public static buildPaginationQuery(
    baseQuery: string,
    page: number = 1,
    limit: number = 10
  ): { query: string; countQuery: string; offset: number } {
    const offset = (page - 1) * limit
    const query = `${baseQuery} LIMIT ${limit} OFFSET ${offset}`
    const countQuery = `SELECT COUNT(*) as total FROM (${baseQuery}) as count_query`
    
    return { query, countQuery, offset }
  }

  // Search helper
  public static buildSearchQuery(
    searchTerm: string,
    searchFields: string[]
  ): string {
    const searchConditions = searchFields
      .map(field => `LOWER(${field}) LIKE LOWER($1)`)
      .join(' OR ')
    
    return searchConditions
  }

  // Filter helper
  public static buildFilterQuery(
    filters: Record<string, any>
  ): { whereClause: string; params: any[] } {
    const conditions: string[] = []
    const params: any[] = []
    let paramIndex = 1

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          const placeholders = value.map(() => `$${paramIndex++}`).join(', ')
          conditions.push(`${key} IN (${placeholders})`)
          params.push(...value)
        } else if (typeof value === 'boolean') {
          conditions.push(`${key} = $${paramIndex++}`)
          params.push(value)
        } else {
          conditions.push(`${key} = $${paramIndex++}`)
          params.push(value)
        }
      }
    })

    const whereClause = conditions.length > 0 
      ? `WHERE ${conditions.join(' AND ')}`
      : ''

    return { whereClause, params }
  }
}

// Initialize database connection
export const initializeDatabase = async (): Promise<void> => {
  const db = DatabaseConnection.getInstance()
  await db.connect()
}

// Export database instance
export const db = DatabaseConnection.getInstance()
export { dbConfig }
