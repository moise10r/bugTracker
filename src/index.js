import store from "./redux/store";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_BUG',
  payload: {
    description: 'Bug 1'
  }
});

unsubscribe();

store.dispatch({
  type: 'DELETE_BUG',
  payload: {
    id:1
  }
});