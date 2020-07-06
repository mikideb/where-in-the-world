import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SearchBox.module.css';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchBox = ({ setSearch, darkMode }) => {
  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={e => setSearch(e.target.value)}
        className={
          darkMode ? `${styles.searchBox} ${styles.darkMode}` : styles.searchBox
        }
      />
      <SearchIcon
        className={styles.searchIcon}
        style={{ fill: darkMode ? 'rgb(255, 255, 255)' : 'rgb(132, 132, 132)' }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(SearchBox);

SearchBox.propTypes = {
  setSearch: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};
