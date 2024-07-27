// Export a new instance of WeakMap
export const weakMap = new WeakMap();

/**
 * Tracks the number of times queryAPI is called for each endpoint.
 * @param {Object} endpoint - The endpoint object.
 * @param {string} endpoint.protocol - The protocol of the endpoint.
 * @param {string} endpoint.name - The name of the endpoint.
 * @throws {Error} - Throws an error if the endpoint load is high.
 */
export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null || !endpoint.name) {
    throw new Error('Invalid endpoint object');
  }

  // Check if the endpoint is already in the WeakMap
  let count = weakMap.get(endpoint);

  if (!count) {
    count = 0;
  }

  // Increment the count for this endpoint
  count += 1;
  weakMap.set(endpoint, count);

  // Throw an error if the count is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
