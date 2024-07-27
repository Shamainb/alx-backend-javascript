/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array whose elements are to be checked.
 * @returns {boolean} - True if all elements in the array exist in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError('The first argument must be a Set');
  }
  if (!Array.isArray(array)) {
    throw new TypeError('The second argument must be an Array');
  }
  return array.every((element) => set.has(element));
}
