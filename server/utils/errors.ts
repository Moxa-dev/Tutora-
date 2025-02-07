/**
 * Base error class for the application.
 */
export class AppError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  /**
   * Custom error for validation failures.
   */
  export class ValidationError extends AppError {
    constructor(message: string) {
      super(message, 400); // 400 Bad Request
    }
  }
  
  /**
   * Custom error for resource not found.
   */
  export class NotFoundError extends AppError {
    constructor(message: string) {
      super(message, 404); // 404 Not Found
    }
  }
  
  /**
   * Custom error for internal server errors.
   */
  export class InternalServerError extends AppError {
    constructor(message: string) {
      super(message, 500); // 500 Internal Server Error
    }
  }