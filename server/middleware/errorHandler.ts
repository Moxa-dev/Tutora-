impoimport { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/errors';

/**
 * Centralized error-handling middleware.
 * @param err - The error object.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle custom AppError instances
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  // Handle Zod validation errors
  if (err.name === 'ZodError') {
    return res.status(400).json({
      error: 'Validation failed',
      details: err.errors.map((e: any) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // Log unexpected errors for debugging
  console.error('Unhandled Error:', err);

  // Return a generic 500 Internal Server Error response
  return res.status(500).json({
    error: 'Internal Server Error',
  });
};