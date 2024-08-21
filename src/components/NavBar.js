// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Ensure this file contains the necessary styles

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
