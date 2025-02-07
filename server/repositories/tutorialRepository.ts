import { ITutorial, CreateTutorialInput, UpdateTutorialInput } from '../types/tutorialTypes';
import TutorialModel from '../models/tutorialModel';

class TutorialRepository {
  /**
   * Creates a new tutorial in the database.
   * @param data - The input data for creating a tutorial.
   * @returns The created tutorial document.
   */
  async create(data: CreateTutorialInput): Promise<ITutorial> {
    try {
      const tutorial = await TutorialModel.create(data);
      return tutorial;
    } catch (err) {
      throw new Error(`Failed to create tutorial: ${err.message}`);
    }
  }

  /**
   * Retrieves all tutorials from the database.
   * @returns An array of tutorial documents.
   */
  async findAll(): Promise<ITutorial[]> {
    try {
      const tutorials = await TutorialModel.find();
      return tutorials;
    } catch (err) {
      throw new Error(`Failed to fetch tutorials: ${err.message}`);
    }
  }

  /**
   * Retrieves tutorials filtered by category.
   * @param category - The category to filter by.
   * @returns An array of tutorial documents matching the category.
   */
  async findByCategory(category: string): Promise<ITutorial[]> {
    try {
      const tutorials = await TutorialModel.find({ category });
      return tutorials;
    } catch (err) {
      throw new Error(`Failed to fetch tutorials by category: ${err.message}`);
    }
  }

  /**
   * Updates a tutorial by its ID.
   * @param id - The ID of the tutorial to update.
   * @param data - The updated fields for the tutorial.
   * @returns The updated tutorial document, or null if not found.
   */
  async update(id: string, data: UpdateTutorialInput): Promise<ITutorial | null> {
    try {
      const tutorial = await TutorialModel.findByIdAndUpdate(id, data, { new: true });
      return tutorial;
    } catch (err) {
      throw new Error(`Failed to update tutorial: ${err.message}`);
    }
  }

  /**
   * Deletes a tutorial by its ID.
   * @param id - The ID of the tutorial to delete.
   */
  async delete(id: string): Promise<void> {
    try {
      await TutorialModel.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(`Failed to delete tutorial: ${err.message}`);
    }
  }
}

export default new TutorialRepository();