import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

/**
 * Middleware to validate request body against Zod schema
 */
export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate and parse the request body
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error: any) {
      // Return validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors?.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message,
        })) || [],
      });
    }
  };
};
