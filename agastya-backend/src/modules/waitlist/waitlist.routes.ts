import { Router } from 'express';
import { waitlistController } from './waitlist.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { waitlistSchema } from './waitlist.schema';

const router = Router();

/**
 * POST /api/waitlist
 * Add user to waitlist
 */
router.post(
  '/',
  validateRequest(waitlistSchema),
  waitlistController.addToWaitlist.bind(waitlistController)
);

/**
 * GET /api/waitlist/count
 * Get total number of waitlist signups
 */
router.get(
  '/count',
  waitlistController.getWaitlistCount.bind(waitlistController)
);

export default router;
