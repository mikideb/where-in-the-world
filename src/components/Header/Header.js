import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../../actions';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

import lightMoon from '../../assets/moon1.svg';
import { ReactComponent as DarkMoon } from '../../assets/moon.svg';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      className={
        darkMode ? `${styles.header} ${styles.headerDark}` : styles.header
      }
    >
      <div className={styles.container}>
        <h1 className={styles.headline}>Where in the world?</h1>
        <button
          className={styles.darkModeBtn}
          onClick={() => toggleDarkMode(!darkMode)}
        >
          {darkMode ? (
            <DarkMoon style={{ fill: 'rgb(255, 255, 255)' }} />
          ) : (
            <img src={lightMoon} alt="Moon" className={styles.moon} />
          )}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps, { toggleDarkMode })(Header);

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};
