import React from 'react';
import './Header.scss';

const Header = (props) => {
   return (
      <header className="header">
         <div className="container">
            <h1 className="header__title">React Todo</h1>
         </div>
      </header>
   )
};

export default Header;