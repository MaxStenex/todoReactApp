import React, { useState } from 'react';
import './Footer.scss';
import { ReactComponent as AddTodoIcon } from '../../assets/AddTodoIcon.svg';

const Footer = ({ createTodo }) => {
  debugger;
  const [todoText, setTodoText] = useState('');

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__add-form'>
          <input
            type='text'
            className='footer__add-input'
            placeholder='Type here'
            onChange={(evt) => {
              setTodoText(evt.target.value);
            }}
            tabIndex={1}
            value={todoText}
          />
          <AddTodoIcon
            tabIndex={2}
            onClick={() => {
              if (todoText.trim() !== '') {
                createTodo(todoText);
                setTodoText('');
              } else {
                return;
              }
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
