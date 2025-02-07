import { z } from 'zod';
import { TutorialCategory } from '../types/tutorialTypes';

/**
 * Validation schema for creating a new tutorial.
 */
export const createTutorialSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.enum(Object.values(TutorialCategory) as [string, ...string[]], {
    errorMap: () => ({ message: 'Invalid category' }),
  }),
});

/**
 * Validation schema for updating an existing tutorial.
 */
export const updateTutorialSchema = createTutorialSchema.partial();

/**
 * Type inference for validated data.
 */
export type CreateTutorialInput = z.infer<typeof createTutorialSchema>;
export type UpdateTutorialInput = z.infer<typeof updateTutorialSchema>;