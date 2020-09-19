const initialState = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : {
   todoList: []
};

const todoListReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CREATE-TODO-ITEM': {
         const todo = { text: action.text, done: false, id: state.todoList.length === 0 ? 1 : state.todoList[state.todoList.length - 1].id + 1 };
         const newState = {
            ...state,
            todoList: [...state.todoList, todo]
         };
         localStorage.setItem('todoList', JSON.stringify(newState));
         return newState;
      }
      case 'DELETE-TODO-ITEM': {
         const newState = {
            ...state,
            todoList: [...state.todoList.filter((todo) => todo.id !== action.id)]
         };
         localStorage.setItem('todoList', JSON.stringify(newState));
         return newState;
      }
      case 'TOGGLE-TODO-ITEM': {
         const newState = {
            ...state,
            todoList: [...state.todoList.map((todo) => {
               if (todo.id === action.id) {
                  return { ...todo, done: !todo.done }
               }
               return todo;
            })]
         };
         localStorage.setItem('todoList', JSON.stringify(newState));
         return newState;
      }
      default: {
         return state;
      }
   }
}

export default todoListReducer;