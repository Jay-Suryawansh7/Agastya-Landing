import { z } from 'zod';

// Waitlist schema for validation
export const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email format'),
  organization: z.string().max(100, 'Organization name must be less than 100 characters').optional(),
  role: z.string().max(100, 'Role must be less than 100 characters').optional(),
  usageReason: z.string().max(500, 'Usage reason must be less than 500 characters').optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
