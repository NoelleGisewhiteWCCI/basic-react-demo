import React from "react";
import style from './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-div">
    <h2>Welcome</h2>
      <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/all-games'}>All Games</NavLink></li>
          <li><NavLink to={'/single-game'}>Single Game</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;
