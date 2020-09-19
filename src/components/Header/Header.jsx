import React from 'react';
import './Header.scss';

const Header = (props) => {
   return (
      <header className="header">
         <div className="container">
            <h1 className="header__title">React Todo</h1>
            <ul className="header__todo-types">
               {
                  props.todosTypes.map((todosType) => {
                     return <li className={'header__todo-type' + (todosType.type === props.currentTodos ? ' header__todo-type--current' : '')}
                        key={todosType.id} onClick={() => { props.changeCurrentTodos(todosType.type) }}>
                        {todosType.type}
                     </li>
                  })
               }
            </ul>
         </div>
      </header>
   )
};
export default Header;