import {createStore, combineReducers} from "redux"
import { v4 as uuid } from "uuid";
//Add expense
const addExpense = ({description = '', note = '',amount = 0, createdAt = 0} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
const removeExpense = ({id} = {}) => ({
  type:'REMOVE_EXPENSE',
  id
})
const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
})
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) =>{
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}


const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type){
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      return [
        ...state,
        action.expense
      ];      
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id) 
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
      console.log(expense);
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text:'',
  sortBy:'date',
  startDate:undefined,
  endDate:undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}


const store = createStore(combineReducers({
  expenses:expensesReducer,
  filters: filtersReducer
}))
store.subscribe(() => {
  const state = store.getState();
  const visibleExpense = getVisibleExpense(state.expenses, state.filters);
  console.log(visibleExpense);
})
const expenseone =  store.dispatch(addExpense({description:'Rent', amount:-100, createdAt: -21000}))
const expenseone_1 =  store.dispatch(addExpense({description:'Rent_Test', amount:100, createdAt: -1000}))
// store.dispatch(removeExpense({id:expenseone.expense.id}))
// store.dispatch(editExpense(expensetwo.expense.id, {amount: 500}))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// console.log(expenseone);

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999))

const demoState = {
  expenses: [{
    id:'4356',
    description: 'January',
    note: 'This was the final',
    amount: 7765,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

// const user = {
//   name: 'Jen',
//   age: 24
// }
// console.log({
//   ...user,
//   location:'Thailand'
// })
