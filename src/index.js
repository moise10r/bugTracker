import store from "./redux/store";

store.dispatch({
  type: 'ADD_BUG',
  payload: {
    description: 'Bug 1'
  }
});

store.dispatch({
  type: 'DELETE_BUG',
  payload: {
    id:1
  }
});
console.log(store.getState());