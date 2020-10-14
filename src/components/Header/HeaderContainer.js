import { connect } from 'react-redux';
import { changeCurrentTodos } from '../../actions/todoTypesActions';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    todosTypes: state.todosTypes.todosTypesList,
    currentTodos: state.todosTypes.currentTodos,
  };
};

const HeaderContainer = connect(mapStateToProps, { changeCurrentTodos })(
  Header
);

export default HeaderContainer;
