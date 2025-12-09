# Agastya Waitlist Backend

Backend service for handling waitlist submissions for Agastya PCB Design AI.

## 🛠️ Tech Stack

- **Node.js** (v20 LTS)
- **TypeScript**
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **Zod** (validation)
- **Jest** (testing)

## 📋 Prerequisites

- Node.js v20+
- PostgreSQL 16+
- npm or yarn

## 🚀 Quick Start

### 1. Clone and Install

```bash
cd agastya-backend
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL="postgresql://agastya:agastya123@localhost:5432/agastya_waitlist?schema=public"
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=3
```

### 3. Database Setup

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate
```

### 4. Start Development Server

```bash
npm run dev
```

Server will start on `http://localhost:5000`

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Start all services (PostgreSQL + Backend)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build

```bash
# Build image
docker build -t agastya-backend .

# Run container
docker run -p 5000:5000 --env-file .env agastya-backend
```

## 📡 API Endpoints

### Add to Waitlist

```http
POST /api/waitlist
Content-Type: application/json

{
  "name": "Jay",
  "email": "jay@example.com",
  "organization": "Cogneoverse",
  "role": "Founder",
  "usageReason": "Using Agastya to design robotics PCBs"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "data": {
    "id": "uuid",
    "name": "Jay",
    "email": "jay@example.com"
  }
}
```

**Error (409 Conflict):**

```json
{
  "success": false,
  "message": "This email is already on the waitlist"
}
```

**Error (400 Bad Request):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Get Waitlist Count

```http
GET /api/waitlist/count
```

**Response (200 OK):**

```json
{
  "success": true,
  "count": 42
}
```

### Health Check

```http
GET /health
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test
```

## 📁 Project Structure

```
agastya-backend/
├── src/
│   ├── app.ts                  # Express app configuration
│   ├── server.ts               # Server entry point
│   ├── config/
│   │   ├── env.ts             # Environment validation
│   │   └── db.ts              # Prisma client setup
│   ├── modules/
│   │   └── waitlist/
│   │       ├── waitlist.controller.ts
│   │       ├── waitlist.service.ts
│   │       ├── waitlist.routes.ts
│   │       └── waitlist.schema.ts
│   ├── middlewares/
│   │   └── validateRequest.ts
│   ├── utils/
│   │   ├── rateLimit.ts
│   │   └── errorHandler.ts
│   └── __tests__/
│       └── waitlist.test.ts
├── prisma/
│   └── schema.prisma
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── jest.config.js
└── .env.example
```

## 🔒 Security Features

- **Helmet**: Secure HTTP headers
- **CORS**: Configured for specific frontend origin
- **Rate Limiting**: 3 requests per minute per IP
- **Input Validation**: Zod schema validation
- **Environment Validation**: Strict env variable checking
- **Prepared Statements**: Prisma ORM prevents SQL injection

## 🛠️ Development Scripts

```bash
npm run dev              # Start development server with hot reload
npm run build            # Build TypeScript to JavaScript
npm start                # Start production server
npm test                 # Run tests with coverage
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio (DB GUI)
```

## 📊 Database Schema

```prisma
model Waitlist {
  id           String   @id @default(uuid())
  name         String
  email        String   @unique
  organization String?
  role         String?
  usageReason  String?  @map("usage_reason")
  createdAt    DateTime @default(now()) @map("created_at")

  @@map("waitlist")
}
```

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production/test) | development |
| `PORT` | Server port | 5000 |
| `DATABASE_URL` | PostgreSQL connection string | - |
| `FRONTEND_URL` | Frontend URL for CORS | - |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window in ms | 60000 |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | 3 |

## 📝 License

MIT

## 👥 Author

Agastya Team
