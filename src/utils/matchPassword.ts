/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    registerDecorator,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'matchPasswords', async: false })
export class MatchPasswordsConstraint implements ValidatorConstraintInterface {
    validate(confirmPassword: string, args: ValidationArguments): boolean {
        const [relatedPropertyName] = args.constraints;
        const object = args.object as any;
        return confirmPassword === object[relatedPropertyName];
    }

    defaultMessage(_args: ValidationArguments): string {
        return 'Passwords do not match!';
    }
}

export function MatchPasswords(property: string, validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'matchPasswords',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: MatchPasswordsConstraint,
        });
    };
}
