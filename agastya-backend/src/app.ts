import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env';
import waitlistRoutes from './modules/waitlist/waitlist.routes';
import { waitlistRateLimiter } from './utils/rateLimit';
import { errorHandler, notFoundHandler } from './utils/errorHandler';

export const createApp = (): Application => {
  const app = express();

  // Security middleware
  app.use(helmet());
  app.disable('x-powered-by');

  // CORS configuration
  app.use(
    cors({
      origin: config.frontendUrl,
      credentials: true,
    })
  );

  // Body parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Server is running',
      timestamp: new Date().toISOString(),
    });
  });

  // API routes with rate limiting
  app.use('/api/waitlist', waitlistRateLimiter, waitlistRoutes);

  // 404 handler
  app.use(notFoundHandler);

  // Global error handler
  app.use(errorHandler);

  return app;
};
