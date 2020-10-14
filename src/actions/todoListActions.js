export const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'TOGGLE_TODO_ITEM';

export const createTodo = (text) => {
  return {
    type: CREATE_TODO_ITEM,
    text: text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO_ITEM,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO_ITEM,
    id,
  };
};
