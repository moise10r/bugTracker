import store from "./redux/store";
import { bugAdded, bugRemoved } from './redux/actions';
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugRemoved(1));
unsubscribe();
