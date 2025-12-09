import { prisma } from '../../config/db';
import { WaitlistInput } from './waitlist.schema';

export class WaitlistService {
  /**
   * Add a new user to the waitlist
   */
  async addToWaitlist(data: WaitlistInput) {
    // Check if email already exists
    const existingUser = await prisma.waitlist.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('DUPLICATE_EMAIL');
    }

    // Create new waitlist entry
    const waitlistEntry = await prisma.waitlist.create({
      data: {
        name: data.name,
        email: data.email,
        organization: data.organization,
        role: data.role,
        usageReason: data.usageReason,
      },
    });

    return waitlistEntry;
  }

  /**
   * Get all waitlist entries (for admin use)
   */
  async getAllWaitlistEntries() {
    return await prisma.waitlist.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get waitlist count
   */
  async getWaitlistCount() {
    return await prisma.waitlist.count();
  }
}

export const waitlistService = new WaitlistService();
