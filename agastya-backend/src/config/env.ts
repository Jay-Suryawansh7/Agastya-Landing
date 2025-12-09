import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

// Environment variable schema
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('5000'),
  DATABASE_URL: z.string(),
  FRONTEND_URL: z.string().url(),
  RATE_LIMIT_WINDOW_MS: z.string().default('60000'), // 1 minute
  RATE_LIMIT_MAX_REQUESTS: z.string().default('3'),
});

// Validate environment variables
const parseEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    process.exit(1);
  }
};

export const env = parseEnv();

export const config = {
  port: parseInt(env.PORT, 10),
  nodeEnv: env.NODE_ENV,
  databaseUrl: env.DATABASE_URL,
  frontendUrl: env.FRONTEND_URL,
  rateLimit: {
    windowMs: parseInt(env.RATE_LIMIT_WINDOW_MS, 10),
    maxRequests: parseInt(env.RATE_LIMIT_MAX_REQUESTS, 10),
  },
};
