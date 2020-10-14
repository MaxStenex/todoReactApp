import { connect } from 'react-redux';
import {
  createTodo,
  deleteTodo,
  toggleTodo,
} from '../../actions/todoListActions';
import TodoList from './TodoList';

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList.todoList,
    currentTodos: state.todosTypes.currentTodos,
  };
};

const TodoListContainer = connect(mapStateToProps, {
  createTodo,
  deleteTodo,
  toggleTodo,
})(TodoList);

export default TodoListContainer;
