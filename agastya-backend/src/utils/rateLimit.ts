import rateLimit from 'express-rate-limit';
import { config } from '../config/env';

/**
 * Rate limiter for waitlist endpoint
 * Limits: 3 requests per minute per IP
 */
export const waitlistRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Skip rate limiting in test environment
  skip: () => process.env.NODE_ENV === 'test',
});
