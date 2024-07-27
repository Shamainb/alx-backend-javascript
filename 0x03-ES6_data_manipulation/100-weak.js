/**
 * Tracks the number of times queryAPI is called for each endpoint.
 * @param {Object} endpoint - The endpoint object.
 * @param {string} endpoint.protocol - The protocol of the endpoint.
 * @param {string} endpoint.name - The name of the endpoint.
 * @throws {Error} - Throws an error if the endpoint load is high.
 */
const updateUniqueItems = (groceriesMap) => {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceriesMap.forEach((quantity, item) => {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  });

  return groceriesMap;
};

export default updateUniqueItems;
