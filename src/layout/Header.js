import React from 'react';
import './layout.css';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-header">
          <span className="navbar-name">
            <p>FriendList</p>
          </span>
        </div>
        <div className="logout">
          <a href="##">Logout</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
