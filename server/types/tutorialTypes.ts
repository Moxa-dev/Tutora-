/**
 * Enum for valid tutorial categories.
 */
export enum TutorialCategory {
    JAVASCRIPT = 'JavaScript',
    TYPESCRIPT = 'TypeScript',
    REACT = 'React',
    NODEJS = 'Node.js',
  }
  
  /**
   * Interface representing a tutorial object.
   */
  export interface ITutorial {
    _id?: string; // Optional MongoDB ID
    title: string;
    description: string;
    category: TutorialCategory; // Must be one of the values in TutorialCategory
    createdAt?: Date; // Automatically set by MongoDB or the application
  }
  
  /**
   * Type for creating a new tutorial.
   * Excludes `_id` and `createdAt` since they are generated automatically.
   */
  export type CreateTutorialInput = Pick<ITutorial, 'title' | 'description' | 'category'>;
  
  /**
   * Type for updating an existing tutorial.
   * All fields are optional since only specific fields may need to be updated.
   */
  export type UpdateTutorialInput = Partial<CreateTutorialInput>;