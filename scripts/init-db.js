#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Initializing Ailoo Website Database...\n');

try {
  // Check if PostgreSQL is running
  console.log('📋 Checking PostgreSQL connection...');
  execSync('pg_isready -h localhost -p 5432', { stdio: 'pipe' });
  console.log('✅ PostgreSQL is running\n');

  // Create database if it doesn't exist
  console.log('📋 Creating database if it doesn\'t exist...');
  try {
    execSync('createdb ailoo_website', { stdio: 'pipe' });
    console.log('✅ Database created successfully\n');
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('ℹ️  Database already exists\n');
    } else {
      throw error;
    }
  }

  // Run the database initialization
  console.log('📋 Running database schema initialization...');
  const initScript = path.join(__dirname, '..', 'src', 'lib', 'database', 'init.ts');
  execSync(`npx tsx ${initScript}`, { stdio: 'inherit' });

  console.log('\n🎉 Database initialization completed successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Set up your environment variables in .env.local');
  console.log('2. Start your Next.js development server: npm run dev');
  console.log('3. Visit http://localhost:3000 to see your website');

} catch (error) {
  console.error('\n❌ Database initialization failed:', error.message);
  console.log('\n🔧 Troubleshooting:');
  console.log('1. Make sure PostgreSQL is installed and running');
  console.log('2. Check your database credentials');
  console.log('3. Ensure you have the necessary permissions');
  process.exit(1);
}
