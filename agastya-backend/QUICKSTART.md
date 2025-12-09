# Quick Start Guide

## ⚡ Fastest Way to Get Started

### Option 1: Automated Setup (Recommended)
```bash
./setup.sh
```

This will:
1. Create .env file
2. Install dependencies
3. Generate Prisma client
4. Setup database (Docker or local)
5. Run migrations

### Option 2: Manual Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env

# 3. Start PostgreSQL (choose one):

# Option A: Using Docker
docker-compose up -d postgres

# Option B: Using local PostgreSQL
# Make sure PostgreSQL is running on localhost:5432
# Update DATABASE_URL in .env if different

# 4. Generate Prisma Client
npx prisma generate

# 5. Run migrations
npx prisma migrate dev --name init

# 6. Start development server
npm run dev
```

## 🧪 Testing

```bash
# Make sure test database is set up
npm test
```

## 🐳 Docker (Full Stack)

```bash
# Start both PostgreSQL and backend
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop everything
docker-compose down
```

## 📡 Test the API

```bash
# Health check
curl http://localhost:5000/health

# Add to waitlist
curl -X POST http://localhost:5000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "organization": "TechCorp",
    "role": "Engineer",
    "usageReason": "PCB design for robotics"
  }'

# Get waitlist count
curl http://localhost:5000/api/waitlist/count
```

## 🛠️ Troubleshooting

### Database Connection Issues
- Make sure PostgreSQL is running
- Check DATABASE_URL in .env
- Verify port 5432 is not in use

### Docker Issues
- Start Docker Desktop
- Check if ports 5000 and 5432 are available
- Try: `docker-compose down` then `docker-compose up -d`

### Migration Issues
```bash
# Reset database
npx prisma migrate reset

# Create new migration
npx prisma migrate dev
```

## 📊 Prisma Studio (Database GUI)
```bash
npx prisma studio
# Opens at http://localhost:5555
```

For full documentation, see [README.md](./README.md)
