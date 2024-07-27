/**
 * Returns a string of all set values that start with a specific string.
 * @param {Set} set - The set of values to filter.
 * @param {string} startString - The string that values must start with.
 * @returns {string} - A string containing values from the set, separated by '-'.
 */
const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
