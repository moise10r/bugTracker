import { createAction } from '@reduxjs/toolkit'

const BUG_ADDED = createAction('bugAdded');
const BUG_REMOVED = createAction('bugRemoved');
const BUG_RESOLVED = createAction('bugResolved');

//actions

export const bugAdded = (description) => ({
  type: BUG_ADDED.type,
  payload: {
    description,
  }
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED.type,
  payload: {
    id,
  }
});

export const bugRemoved = (id) => ({
  type: BUG_REMOVED.type,
  payload: {
    id,
  }
});


//reducer

let lastId = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,  
        }
      ]
      case BUG_RESOLVED.type:
        // return state.map((bug) => bug.id !== action.payload.id ? bug : { ...bug, resolved = true});
      case BUG_REMOVED.type:
        return state.filter((bug) => bug.id !== action.payload.id);
      
    default:
      return state;
  }
}
export default reducer;