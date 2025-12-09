#!/bin/bash

echo "🚀 Agastya Backend Setup Script"
echo "================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created"
    echo "⚠️  Please update DATABASE_URL in .env if needed"
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Generate Prisma Client
echo "🔧 Generating Prisma Client..."
npx prisma generate
echo ""

# Ask user about database setup
echo "🗄️  Database Setup Options:"
echo "1. Use Docker (recommended)"
echo "2. Use existing PostgreSQL"
echo ""
read -p "Choose option (1 or 2): " db_option

if [ "$db_option" == "1" ]; then
    echo ""
    echo "🐳 Starting PostgreSQL with Docker..."
    docker-compose up -d postgres
    echo "⏳ Waiting for PostgreSQL to be ready..."
    sleep 5
    echo "✅ PostgreSQL is running"
elif [ "$db_option" == "2" ]; then
    echo ""
    echo "⚠️  Make sure your PostgreSQL is running and DATABASE_URL in .env is correct"
    read -p "Press Enter to continue..."
fi

echo ""
echo "🔄 Running database migrations..."
npx prisma migrate dev --name init

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the server:"
echo "  npm run dev"
echo ""
echo "To run tests:"
echo "  npm test"
echo ""
echo "To stop PostgreSQL (if using Docker):"
echo "  docker-compose down"
