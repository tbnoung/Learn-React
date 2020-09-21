import expenseReducer from '../../reducers/expenses'
import expense from '../fixtures/expense'
import expenseData from '../fixtures/expense'
test('Default state', () => {
  const state = expenseReducer(undefined, {type:'@@INIT'})
  expect(state).toEqual([])
})


test('remove Expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id:expenseData[1].id
  }
  const state = expenseReducer(expense,action)
  expect(state).toEqual([expense[0]])
})


test("remove Expense by id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '9',
  };
  const state = expenseReducer(expense, action);
  expect(state).toEqual(expense);
});

test('Add expense', ()=> {
  const expense = {
    id:'109',
    description:'Tbnoung',
    note:'---',
    createAt:10000,
    amount:29000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expenseReducer(expenseData, action)
  expect(state).toEqual([...expenseData, expense])
})

test('Edit', ()=>{
  const amount = 199999
  const action = {
    type: "EDIT_EXPENSE",
    id: expenseData[1].id,
    update: {
      amount
    },
  };
  const state = expenseReducer(expenseData,action)
  expect(state[1].amount).toEqual(amount)
})

test("Edit not found", () => {
  const amount = 199999;
  const action = {
    type: "EDIT_EXPENSE",
    id: '1199',
    update: {
      amount,
    },
  };
  const state = expenseReducer(expenseData, action);
  expect(state).toEqual(expenseData);
});