import { connect } from "react-redux";
import { todoInputTextChangeAC } from "../../actions/todoInputAC";
import { createTodoAC } from "../../actions/todoItemAC";
import Footer from "./Footer";

const mapStateToProps = (state) => {
   return {}
};

const matDispatchToProps = (dispatch) => {
   return {
      changeInputText: (text) => {
         dispatch(todoInputTextChangeAC(text))
      },
      addNewTodo: (text) => {
         dispatch(createTodoAC(text));
      }
   }
};

const FooterContainer = connect(mapStateToProps, matDispatchToProps)(Footer);

export default FooterContainer;