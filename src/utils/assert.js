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

export function isGreaterThan(value1, value2, callbackTrue, callbackFalse = () => {}) {
  /**
   *  callbackTrue is mandatory because we always want to do something with the comparison.
   *  callbackFalse is optional, probably only needed if we need to update values changed with the previous callbackTrue
   *  comparison is simple as an example. could be useful for complex logic.
   *  try to keep generic functions in order to be reusable for future developments.
   */
  if (value1 > value2) {
    callbackTrue(value1, value2);
  } else {
    callbackFalse(value1, value2);
  }
}

export function isRequiredArrayValue(value, callbackNoValue, callbackValueSelected = () => {}) {
  /**
   * Example with Tile or Thumbnail required.
   */
  if (value.length === 0) {
    callbackNoValue(value);
  } else {
    callbackValueSelected(value);
  }
}