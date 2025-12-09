# 🚀 Deploying Agastya Backend to Render

## Option 1: Blueprints (Recommended)

1. Push this code to a GitHub repository.
2. Go to [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** -> **Blueprint**.
4. Connect your repository.
5. Render will automatically detect `render.yaml` and set up:
   - The Node.js Web Service
   - A PostgreSQL Database (if you want a managed one on Render)

> **Note:** If you are using **Aiven** for your database (as currently configured), you don't need the database section in `render.yaml`. You should delete the `databases` section from `render.yaml` and manually set `DATABASE_URL` in the Render dashboard.

## Option 2: Manual Setup (If using Aiven DB)

1. **Push code** to GitHub.
2. **Create Web Service** on Render:
   - Connect your repo.
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
3. **Environment Variables**:
   Add these in the "Environment" tab:
   - `NODE_ENV`: `production`
   - `DATABASE_URL`: (Your Aiven connection string)
   - `FRONTEND_URL`: (Your production frontend URL, e.g., `https://agastya.vercel.app`)

## ⚠️ Important Checks

1. **Prisma Client**:
   I've added `"postinstall": "prisma generate"` to `package.json`. This ensures Prisma Client is generated automatically when Render installs dependencies.

2. **Database Migrations**:
   On the first deployment, you might need to run migrations.
   - You can add a "Build Command" wrapper: `npm install && npx prisma migrate deploy && npm run build`
   - OR run it manually from the Render Shell tab: `npx prisma migrate deploy`

3. **Port**:
   Render automatically sets the `PORT` environment variable. The code uses `process.env.PORT`, so it will work automatically.
