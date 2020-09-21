import { v4 as uuid } from "uuid";
import moment from 'moment'
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = moment().format('YYYY-MM-DD'),
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});
