/**
 * Converts an array into a Set.
 * @param {Array} array - The array to convert to a Set.
 * @returns {Set} - A Set containing the elements of the array.
 */
export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('The argument must be an array');
  }
  return new Set(array);
}
