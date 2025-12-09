import { Request, Response, NextFunction } from 'express';
import { waitlistService } from './waitlist.service';
import { WaitlistInput } from './waitlist.schema';

export class WaitlistController {
  /**
   * POST /api/waitlist
   * Add user to waitlist
   */
  async addToWaitlist(req: Request, res: Response, next: NextFunction) {
    try {
      const data: WaitlistInput = req.body;

      const waitlistEntry = await waitlistService.addToWaitlist(data);

      return res.status(201).json({
        success: true,
        message: 'Successfully added to waitlist',
        data: {
          id: waitlistEntry.id,
          name: waitlistEntry.name,
          email: waitlistEntry.email,
        },
      });
    } catch (error) {
      if (error instanceof Error && error.message === 'DUPLICATE_EMAIL') {
        return res.status(409).json({
          success: false,
          message: 'This email is already on the waitlist',
        });
      }
      next(error);
    }
  }

  /**
   * GET /api/waitlist/count
   * Get total waitlist count
   */
  async getWaitlistCount(req: Request, res: Response, next: NextFunction) {
    try {
      const count = await waitlistService.getWaitlistCount();
      return res.status(200).json({
        success: true,
        count,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const waitlistController = new WaitlistController();
