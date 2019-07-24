import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo/logo.svg';
import style from './Header.module.css';
import resetId from './resetId';
import getUserId from '../../redux/header/headerSelector';

const Header = ({ id = '' }) => (
  <nav className={style.nav}>
    <Link
      onClick={() => {
        if (id) resetId(id);
      }}
      className={style.a}
      to="/"
    >
      <img
        width="60"
        height="18"
        className={style.logo}
        src={logo}
        alt="logo"
      />
    </Link>
    <Link className={style.link} to="/contacts">
      контакты
    </Link>
  </nav>
);

const mapStateToProps = state => ({
  id: getUserId(state),
});

Header.defaultProps = {
  id: '',
};

Header.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(Header);
