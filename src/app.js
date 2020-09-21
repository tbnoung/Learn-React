import React from "react";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import '../src/styles/styles.scss'
import { addExpense } from "./action/expenses";
import { setTextFilter } from './action/filters'
import getVisibleExpense from './selectors/expenses'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
const store = configureStore()
// store.dispatch(addExpense({ description: "Water bill", amount: 4555 }))
// store.dispatch(addExpense({ description: "Rent", amount: 10100 }));
// store.dispatch(addExpense({ description: "Gas bill" }));
// store.dispatch(setTextFilter('bill'))
// const state = store.getState()
// const VisibleExpense = getVisibleExpense(state.expenses, state.filters)
// console.log(VisibleExpense);



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"))