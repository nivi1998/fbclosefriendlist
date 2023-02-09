import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div className="layout-header">
          <Header />
        </div>

        <div className="sideHeader">
          <Sidebar />
        </div>
        <div className="childrenStyle">{children}</div>
      </div>
    </>
  );
};

export default Layout;
