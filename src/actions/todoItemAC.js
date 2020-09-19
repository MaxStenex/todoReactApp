export const createTodoAC = (text) => {
   return {
      type: 'CREATE-TODO-ITEM',
      text: text
   }
};

export const deleteTodoAC = (id) => {
   return {
      type: 'DELETE-TODO-ITEM',
      id
   }
};

export const toggleTodoAC = (id) => {
   return {
      type: 'TOGGLE-TODO-ITEM',
      id
   }
};

