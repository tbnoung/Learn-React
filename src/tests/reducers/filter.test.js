import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('defult value', () => {
  const state = filtersReducer(undefined,{type:'@@INIT'})
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
})

test('set sortBy amount', ()=> {
  const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test("set sortBy date", () => {
  const curentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const state = filtersReducer(curentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("set text Filters", () => {
  const text = 'this is my filters'
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('set Start Date', () => {
  const startDate = moment()
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined,action)
  expect(state.startDate).toBe(startDate)
})
test("set End Date", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});