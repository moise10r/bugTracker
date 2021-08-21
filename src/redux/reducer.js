let lastId = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUG":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,  
        }
      ]
      case "DELETE_BUG":
        return state.filter((bug) => bug.id !== action.payload.id);
      
    default:
      return state;
  }
}