/**
 * Returns a string of all set values that start with a specific string.
 * @param {Set} set - The set of values to filter.
 * @param {string} startString - The string that values must start with.
 * @returns {string} - A string containing values from the set, separated by '-'.
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('The first argument must be a Set');
  }
  if (typeof startString !== 'string') {
    throw new TypeError('The second argument must be a string');
  }

  // Filter and transform set values
  const filteredValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the results with '-'
  return filteredValues.join('-');
}
