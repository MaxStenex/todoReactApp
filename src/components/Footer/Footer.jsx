import React, { useState } from 'react';
import './Footer.scss';
import { ReactComponent as AddTodoIcon } from '../../assets/AddTodoIcon.svg';

const Footer = ({ createTodo }) => {
  const [todoText, setTodoText] = useState('');
  const addTodo = () => {
    if (todoText.trim() !== '') {
      createTodo(todoText);
      setTodoText('');
    }
  };
  const addTodoOnEnter = (evt) => {
    if (evt.key === 'Enter') {
      addTodo();
    }
  };

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
            onKeyPress={addTodoOnEnter}
          />
          <AddTodoIcon tabIndex={2} onClick={addTodo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
