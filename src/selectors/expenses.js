import moment from 'moment'
export default (expenses, {text, sortBy, startDate, endDate}) => {
  
  return expenses.filter((expense) => {
    // console.log('expense',expense);
    const createAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true
    // console.log("startDateMatch", startDateMatch);
    // console.log("endDateMatch", endDateMatch);
    // console.log("startDate", startDate);
    // console.log("createAtMoment", createAtMoment);
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