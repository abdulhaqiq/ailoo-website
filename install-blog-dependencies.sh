#!/bin/bash

# Install required dependencies for the blog API system
echo "Installing blog API dependencies..."

# Install production dependencies
npm install bcryptjs jsonwebtoken

# Install development dependencies
npm install -D @types/bcryptjs @types/jsonwebtoken

echo "Dependencies installed successfully!"
echo ""
echo "Next steps:"
echo "1. Create a .env file with your database configuration"
echo "2. Set up your database (PostgreSQL recommended)"
echo "3. Run the migration script to create tables"
echo "4. Start using the blog API endpoints"
echo ""
echo "Default admin credentials:"
echo "Email: admin@ailoo.com"
echo "Password: admin123"
