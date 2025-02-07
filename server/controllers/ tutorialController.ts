import { Request, Response } from 'express';
import { ITutorial, CreateTutorialInput, UpdateTutorialInput } from '../types/tutorialTypes';
import tutorialRepository from '../repositories/tutorialRepository';
import { NotFoundError, ValidationError } from '../utils/errors';
import { createTutorialSchema, updateTutorialSchema } from '../utils/validationSchemas';

class TutorialController {
  async createTutorial(req: Request<{}, {}, CreateTutorialInput>, res: Response): Promise<void> {
    try {
      const validatedData = createTutorialSchema.parse(req.body);
      const tutorial = await tutorialRepository.create(validatedData);
      res.status(201).json({ message: 'Tutorial created successfully!', tutorial });
    } catch (err) {
      if (err instanceof z.ZodError) {
        throw new ValidationError(err.errors.map((e) => e.message).join(', '));
      }
      throw err;
    }
  }

  async updateTutorial(req: Request<{ id: string }, {}, UpdateTutorialInput>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const validatedData = updateTutorialSchema.parse(req.body);
      const tutorial = await tutorialRepository.update(id, validatedData);
      if (!tutorial) {
        throw new NotFoundError('Tutorial not found');
      }
      res.status(200).json({ message: 'Tutorial updated successfully!', tutorial });
    } catch (err) {
      if (err instanceof z.ZodError) {
        throw new ValidationError(err.errors.map((e) => e.message).join(', '));
      }
      throw err;
    }
  }
}

export default new TutorialController();