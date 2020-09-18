import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import './normalize.scss'

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <main>
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
