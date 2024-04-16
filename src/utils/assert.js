/**
 * Throws an error when value is null or undefined.
 * @param value {object | undefined | null} The value to assert.
 * @param message {string} The error message thrown when assertion fails.
 * @returns {asserts value is object}
 */
export function notNullOrUndefined(value, message) {
  if (value == null) {
    throw new Error(message);
  }
}