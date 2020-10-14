import { CHANGE_CURRENT_TODOS } from '../actions/todoTypesActions';

const initialState = {
  currentTodos: 'all',
  todosTypesList: [
    {
      type: 'all',
      id: 1,
    },
    {
      type: 'completed',
      id: 2,
    },
    {
      type: 'not completed',
      id: 3,
    },
  ],
};
const todoTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_TODOS:
      return {
        ...state,
        currentTodos: action.todosType,
      };
    default:
      return {
        ...state,
      };
  }
};

export default todoTypesReducer;
