# Frontend-Backend Integration Guide

## Overview
The Agastya landing page is now connected to the waitlist backend API.

## Components Integration

### Page Flow
1. Hero → Process Flow → Features → Philosophy → About Us → Linking Node → **Waitlist Form** → Footer

### Waitlist Form (`WaitlistForm.tsx`)
- **Location**: `/Users/jay/Downloads/Demo/agastya/src/components/WaitlistForm.tsx`
- **Features**:
  - Glowing card design matching site aesthetic
  - Form validation
  - Loading states
 - Success/error notifications
  - Icon-enhanced input fields
  - Smooth animations

## Running Both Services

### Terminal 1: Backend (Port 5000)
```bash
cd /Users/jay/Downloads/Demo/agastya-backend

# Option 1: With Docker
docker-compose up -d postgres
npx prisma migrate dev --name init
npm run dev

# Option 2: Local PostgreSQL
# (Make sure PostgreSQL is running)
npx prisma migrate dev --name init
npm run dev
```

### Terminal 2: Frontend (Port 3000)
```bash
cd /Users/jay/Downloads/Demo/agastya
npm run dev
```

## Testing the Integration

1. **Start both servers** (see above)

2. **Open the frontend**:
   - Visit `http://localhost:3000`
   - Scroll to the waitlist form at the bottom

3. **Submit the form**:
   - Fill in Name and Email (required)
   - Optionally add Organization, Role, and Usage Reason
   - Click "Join Waitlist"

4. **Expected Results**:
   - ✅ Green success message: "Successfully added to waitlist!"
   - ❌ Red error message if email already exists
   - ⚠️ Validation errors for invalid inputs

## API Configuration

The frontend is currently configured to connect to:
```
http://localhost:5000/api/waitlist
```

To change this for production:
1. Create an environment variable in `/Users/jay/Downloads/Demo/agastya/.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-api-domain.com
   ```

2. Update the API call in `WaitlistForm.tsx`:
   ```typescript
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waitlist`, {
     // ...
   });
   ```

## CORS Configuration

The backend is configured to accept requests from:
```
FRONTEND_URL=http://localhost:3000
```

For production, update `/Users/jay/Downloads/Demo/agastya-backend/.env`:
```
FRONTEND_URL=https://your-frontend-domain.com
```

## Database Access

View waitlist entries using Prisma Studio:
```bash
cd /Users/jay/Downloads/Demo/agastya-backend
npx prisma studio
```

Opens at `http://localhost:5555`

## Security Features Active

- ✅ Rate limiting: 3 requests per minute per IP
- ✅ CORS protection
- ✅ Input validation with Zod
- ✅ Helmet security headers
- ✅ SQL injection protection (Prisma)

## Troubleshooting

### "Failed to connect to server"
- Check if backend is running on port 5000
- Verify no other service is using port 5000

### "Email already on waitlist"
- This is expected if the email was submitted before
- Use Prisma Studio to view/delete test entries

### CORS errors
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check browser console for detailed error messages

## Next Steps

### For Development
- Both services are running and connected ✅
- Test the form submission
- View entries in Prisma Studio

### For Production
1. Deploy backend (e.g., Railway, Render, Fly.io)
2. Deploy frontend (e.g., Vercel, Netlify)
3. Update environment variables
4. Configure production database
5. Enable HTTPS

## File Locations

**Frontend:**
- Waitlist Form: `/Users/jay/Downloads/Demo/agastya/src/components/WaitlistForm.tsx`
- Main Page: `/Users/jay/Downloads/Demo/agastya/src/app/page.tsx`

**Backend:**
- API Routes: `/Users/jay/Downloads/Demo/agastya-backend/src/modules/waitlist/`
- Database Schema: `/Users/jay/Downloads/Demo/agastya-backend/prisma/schema.prisma`
- Environment: `/Users/jay/Downloads/Demo/agastya-backend/.env`
