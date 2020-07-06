import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './RegionDropdown.module.css';

import { ReactComponent as Cheveron } from '../../assets/cheveron-down.svg';

const RegionDropdown = ({ setSelectedRegion, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div
      className={
        darkMode
          ? `${styles.regionDropdown} ${styles.darkMode}`
          : styles.regionDropdown
      }
    >
      <div
        className={styles.header}
        onKeyPress={() => setIsOpen(!isOpen)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={styles.headline}>Filter by Region</p>
        <Cheveron
          className={styles.icon}
          style={{ fill: darkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
        />
      </div>
      {isOpen && (
        <ul className={styles.regionList}>
          <li>
            <button
              onClick={() => setSelectedRegion(null)}
              className={styles.region}
            >
              All
            </button>
          </li>
          {regions.map(region => (
            <li key={region}>
              <button
                onClick={() => setSelectedRegion(region)}
                className={styles.region}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(RegionDropdown);

RegionDropdown.propTypes = {
  setSelectedRegion: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};
