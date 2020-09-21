import { setStartDate, setEndDate, setTextFilter,sortByAmount, sortByDate } from "../../action/filters";
import moment from 'moment'

test('should generate set Start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set End date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate set Text filters action object', () => {
  const text = 'Sometng in'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text
  })
})
test("should generate set Text filters action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ''
  });
});

test('Should generate action object for sort by date', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})
test('Should generate action object for sort by amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})


