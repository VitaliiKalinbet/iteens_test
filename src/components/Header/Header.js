import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';
import style from './Header.module.css';

const Header = () => (
  <nav className={style.nav}>
    <a
      className={style.a}
      rel="noopener noreferrer"
      target="_blank"
      href="https://goit.ua/"
    >
      <img
        width="60"
        height="18"
        className={style.logo}
        src={logo}
        alt="logo"
      />
    </a>
    <Link className={style.link} to="/contacts">
      контакты
    </Link>
  </nav>
);

export default Header;
