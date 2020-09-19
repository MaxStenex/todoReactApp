import todosTypesReducer from "./reducers/todos-types-reducer";
import todoInputReducer from "./reducers/todo-input-reducer";
import todoListReducer from "./reducers/todo-list-reducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
   todoList: todoListReducer,
   todoInput: todoInputReducer,
   todosTypes: todosTypesReducer,
});

const store = createStore(reducers);
export default store;