import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const currentYear = new Date().getFullYear();

  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${this.income}`;
    },
    getIncomeInEuros() {
      return `${this.income} euros`;
    },
    currentYear,
  };

  return fullBudget;
}
