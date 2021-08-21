import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';

const store = configureStore()
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugAdded('Bug 2'));
store.dispatch(bugAdded('Bug 3'));
// store.dispatch(bugResolved(2));
// store.dispatch(bugResolved(1));
// store.dispatch(bugResolved(3));
// store.dispatch(bugRemoved(1));
unsubscribe();
