import React from 'react';
import './TodoList.scss';
import { ReactComponent as ItemIcon } from './TodoItemIcon.svg';

const TodoList = (props) => {
   return (
      <div className="todo__main">
         <div className="container">
            <ul className="todo__list">
               <li className="todo__item"><span>First Do</span> <ItemIcon /></li>
               <li className="todo__item todo__item--completed"><span>Second</span> <ItemIcon /></li>
            </ul>
         </div>
      </div>
   )
};

export default TodoList;