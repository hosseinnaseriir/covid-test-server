
import { BadRequestException, ValidationError, ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super(options);
  }

  protected formatValidationErrors(validationErrors: ValidationError[]): { field: string; msg: string[] }[] {
    // Accumulate errors by field
    const errorsByField: { [key: string]: string[] } = {};

    validationErrors.forEach(error => {
      if (error.constraints) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(error.constraints).forEach(([constraintKey, constraintValue]) => {
          if (!errorsByField[error.property]) {
            errorsByField[error.property] = [];
          }
          errorsByField[error.property].push(constraintValue);
        });
      }
    });

    // Convert to the format: { field: string; msg: string[] }[]
    return Object.entries(errorsByField).map(([field, messages]) => ({
      field,
      msg: messages,
    }));
  }

  createExceptionFactory() {
    return (validationErrors: ValidationError[] = []) => {
      const formattedErrors = this.formatValidationErrors(validationErrors);
      return new BadRequestException({
        msg: 'Validation failed',
        fields: formattedErrors,
        statusCode: 400,
      });
    };
  }
}
