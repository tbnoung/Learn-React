import selectExpense from '../../selectors/expenses'
import moment from 'moment'
const expense = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 107,
    createAt: moment().format("YYYY-MM-DD"),
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 88,
    createAt: moment().format("YYYY-MM-DD"),
  }
];

test('should filter by text value', () => {
  const filters = {
    text: "Gum",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  }
   const result = selectExpense(expense,filters)
   expect(result).toEqual([expense[0]]);
})


test("should filter by Start Date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpense(expense, filters);
  expect(result).toEqual([expense[0], expense[1]]);
});

test("should filter by End Date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  const result = selectExpense(expense, filters);
  expect(result).toEqual([]);
});

test("should filter by  Date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpense(expense, filters);
  expect(result).toEqual([expense[0],expense[1]]);
});

test("should filter by  Amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpense(expense, filters);
  expect(result).toEqual([expense[0], expense[1]]);
});