import React from 'react';
import './App.scss';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import TodoListContainer from './components/TodoList/TodoListContainer';
import './normalize.scss'

function App() {
  return (
    <div className="app__wrapper">
      <HeaderContainer />
      <main>
        <div className="todo__main">
          <div className="container">
            <TodoListContainer />
          </div>
        </div>
      </main>
      <FooterContainer />
    </div>
  );
}

export default App;
