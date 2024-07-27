/**
 * Returns a Map of groceries with their quantities.
 * @returns {Map} - A Map with grocery items as keys and their quantities as values.
 */
export default function groceriesList() {
  const groceries = new Map();

  // Adding grocery items and their quantities
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
