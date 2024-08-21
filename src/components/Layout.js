// src/components/Layout.js
import React from 'react';
import NavBar from './NavBar'; // Make sure this path is correct

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
