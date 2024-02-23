import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './navbar.module.css';

const Navbar = () => {



  return (
    <ul>
      <li>
        <img src="../asset/emerson-logo.png" className={style.logo} width="100px" />
      </li>
   
   
    </ul>
  );
};
export default Navbar;