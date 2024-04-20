import { checkValidations } from '../validation.service';

describe('checkValidations', () => {
  it('should return undefined when field.validations is null', () => {
    const field = {
      validations: null,
      type: 'NUMBER_INPUT',
    };
    const value = 10;
    const result = checkValidations(field, value);
    expect(result).toBeUndefined();
  });

  it('should return an empty string when field.validations is empty', () => {
    const field = {
      validations: {},
      type: 'NUMBER_INPUT',
    };
    const value = 10;
    const result = checkValidations(field, value);
    expect(result).toBe('');
  });

  it('should return an empty string when field.type is not "NUMBER_INPUT"', () => {
    const field = {
      validations: {
        minValue: 5,
        maxValue: 15,
      },
      type: 'TEXT_INPUT',
    };
    const value = 10;
    const result = checkValidations(field, value);
    expect(result).toBe('');
  });

  it('should return an error message when value is less than minValue', () => {
    const field = {
      validations: {
        minValue: 5,
        maxValue: 15,
      },
      type: 'NUMBER_INPUT',
    };
    const value = 3;
    const result = checkValidations(field, value);
    expect(result).toBe('should be greater than or equal to 5');
  });

  it('should return an error message when value is greater than maxValue', () => {
    const field = {
      validations: {
        minValue: 5,
        maxValue: 15,
      },
      type: 'NUMBER_INPUT',
    };
    const value = 20;
    const result = checkValidations(field, value);
    expect(result).toBe('should be less than or equal to 15');
  });
});