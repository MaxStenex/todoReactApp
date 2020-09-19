import React from 'react';
import './TodoList.scss';
import { ReactComponent as CheckMark } from './CheckMark.svg';
import { ReactComponent as XMark } from './XMark.svg';

const TodoList = (props) => {
   switch (props.currentTodos) {
      case 'completed': {
         return (
            <ul className="todo__list">
               {
                  props.todoList
                     .filter((todo) => todo.done === true)
                     .map((todo) => {
                        return <li className={'todo__item' + (todo.done ? ' todo__item--completed' : '')} key={todo.id}
                           onClick={() => { props.toggleTodoAC(todo.id) }}>
                           <span>{todo.text}</span>
                           {todo.done ? <XMark onClick={() => { props.deleteTodoAC(todo.id) }} /> : <CheckMark />}
                        </li>
                     })
               }
            </ul>
         )
      } case 'not completed': {
         return (
            <ul className="todo__list">
               {
                  props.todoList
                     .filter((todo) => todo.done === false)
                     .map((todo) => {
                        return <li className={'todo__item' + (todo.done ? ' todo__item--completed' : '')} key={todo.id}
                           onClick={() => { props.toggleTodoAC(todo.id) }}>
                           <span>{todo.text}</span>
                           {todo.done ? <XMark onClick={() => { props.deleteTodoAC(todo.id) }} /> : <CheckMark />}
                        </li>
                     })
               }
            </ul>
         )
      }
      default:
         return (
            <ul className="todo__list">
               {
                  props.todoList.map((todo) => {
                     return <li className={'todo__item' + (todo.done ? ' todo__item--completed' : '')} key={todo.id}
                        onClick={() => { props.toggleTodoAC(todo.id) }}>
                        <span>{todo.text}</span>
                        {todo.done ? <XMark onClick={() => { props.deleteTodoAC(todo.id) }} /> : <CheckMark />}
                     </li>
                  })
               }
            </ul>
         )
   }

};

export default TodoList;