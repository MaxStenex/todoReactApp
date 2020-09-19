import { connect } from "react-redux";
import { createTodoAC, deleteTodoAC, toggleTodoAC } from "../../actions/todoItemAC";
import TodoList from "./TodoList";

const mapStateToProps = (state) => {
   return {
      todoList: state.todoList.todoList,
      currentTodos: state.todosTypes.currentTodos
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addNewTodo: (text) => {
         dispatch(createTodoAC(text))
      },
      deleteTodoAC: (id) => {
         dispatch(deleteTodoAC(id))
      },
      toggleTodoAC: (id) => {
         dispatch(toggleTodoAC(id))
      },
   }
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;