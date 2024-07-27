/**
 * Updates quantities of items with an initial quantity of 1 to 100.
 * @param {Map} map - The Map of groceries to update.
 * @returns {Map} - The updated Map with quantities adjusted.
 * @throws {Error} - Throws an error if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map entries
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
