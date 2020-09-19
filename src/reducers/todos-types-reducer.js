const initialState = {
   currentTodos: 'all',
   todosTypesList: [{
      type: 'all',
      id: 1
   },
   {
      type: 'completed',
      id: 2
   },
   {
      type: 'not completed',
      id: 3
   },
   ]
};
const todosTypesReducer = (state = initialState, action) => {
   switch (action.type) {
      case `CHANGE_CURRENT_TODOS`:
         return {
            ...state,
            currentTodos: action.todosType
         }
      default:
         return {
            ...state
         }
   }
};

export default todosTypesReducer;