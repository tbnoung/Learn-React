import { addExpense, editExpense, removeExpense } from '../../action/expenses'
import moment from 'moment'
test('should setup remove expense action object', () => {
  const action = removeExpense({id:'123abc'})
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id: '123abc'
  })
})
test("should setup Edit expense action object", () => {
  const action = editExpense('123abc',{ note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    update: {
      note: 'New note value'
    }
  });
});
test("should setup Add expense action object", () => {
  const data = {
    description: 'Rent',
    amount: 1999,
    createdAt: moment().format("YYYY-MM-DD"),
    note: 'New note'
  }
  const action = addExpense(data);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      ...data,
      id: expect.any(String)
    }
  });
});

test("should setup Add expense action object with defult value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      note: "",
      createdAt: moment().format("YYYY-MM-DD")
    },
  });
});
