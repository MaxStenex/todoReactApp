export const CHANGE_CURRENT_TODOS = 'CHANGE_CURRENT_TODOS';

export const changeCurrentTodos = (todosType) => {
  return {
    type: CHANGE_CURRENT_TODOS,
    todosType,
  };
};
