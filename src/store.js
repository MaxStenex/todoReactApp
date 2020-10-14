import todoListReducer from './reducers/todoListReducer';
import todoTypesReducer from './reducers/todoTypesReducer';

const { createStore, combineReducers } = require('redux');

const reducers = combineReducers({
  todoList: todoListReducer,
  todosTypes: todoTypesReducer,
});

const store = createStore(reducers);
export default store;
