import { connect } from 'react-redux';
import { createTodo } from '../../actions/todoListActions';
import Footer from './Footer';

const FooterContainer = connect(null, { createTodo })(Footer);

export default FooterContainer;
