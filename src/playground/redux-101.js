import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} ={}) => ({
    type: 'INCREMENT',
    incrementBy
  });
const DeincrementCount = ({ deincrementBy = 1 } = {}) => ({
  type: "DEINCREMENT",
  deincrementBy,
});
const Reset = () => ({
  type: "RESET",
});
const Set = ({SetCount} = {}) => ({
  type: "SET",
  SetCount
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DEINCREMENT":
      return {
        count: state.count - action.deincrementBy,
      };
    case "SET":
      return {
        count: action.SetCount,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};
const store = createStore(countReducer)
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount());
store.dispatch(DeincrementCount({ deincrementBy: 10 }));
store.dispatch(Reset())
store.dispatch(Set({SetCount: 101}))



// console.log(store.getState());
