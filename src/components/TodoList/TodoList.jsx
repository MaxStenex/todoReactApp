import React from 'react';
import './TodoList.scss';
import { ReactComponent as CheckMark } from '../../assets/CheckMark.svg';
import { ReactComponent as XMark } from '../../assets/XMark.svg';

const TodoList = ({ currentTodos, todoList, ...props }) => {
  const filterTodos = () => {
    switch (currentTodos) {
      case 'all':
        return todoList;
      case 'completed':
        return todoList.filter((item) => item.done);
      case 'not completed':
        return todoList.filter((item) => !item.done);
      default:
        break;
    }
  };

  return (
    <ul className='todo__list'>
      {filterTodos().map((todo) => {
        return (
          <li
            className={
              'todo__item' + (todo.done ? ' todo__item--completed' : '')
            }
            key={todo.id}
            onClick={() => {
              props.toggleTodo(todo.id);
            }}
          >
            <span>{todo.text}</span>
            {todo.done ? (
              <XMark
                onClick={() => {
                  props.deleteTodo(todo.id);
                }}
              />
            ) : (
              <CheckMark />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
