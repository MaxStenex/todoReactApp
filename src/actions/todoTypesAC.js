export const changeCurrentTodosAC = (todosType) => {
   return {
      type: 'CHANGE_CURRENT_TODOS',
      todosType
   }
};