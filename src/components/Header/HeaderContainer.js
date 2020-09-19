import { connect } from "react-redux";
import { changeCurrentTodosAC } from "../../actions/todoTypesAC";
import Header from "./Header";

const mapStateToProps = (state) => {
   return {
      todosTypes: state.todosTypes.todosTypesList,
      currentTodos: state.todosTypes.currentTodos
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeCurrentTodos: (todosType) => {
         dispatch(changeCurrentTodosAC(todosType))
      }
   }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;