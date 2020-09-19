import React from 'react';
import './Footer.scss';
import { ReactComponent as AddTodoIcon } from './AddTodoIcon.svg';

const Footer = (props) => {
   const inputRef = React.createRef();
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__add-form">
               <input type="text" className="footer__add-input" placeholder='Type here' ref={inputRef}
                  onChange={() => { props.changeInputText(inputRef.current.value) }} tabIndex={1} />
               <AddTodoIcon tabIndex={2} onClick={() => {
                  if (inputRef.current.value.trim() !== '') {
                     props.addNewTodo(inputRef.current.value);
                     inputRef.current.value = '';
                  } else {
                     return
                  }
               }} />
            </div>
         </div>
      </footer>
   )
};

export default Footer;