import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CountryCard from '../CountryCard/CountryCard';

import styles from './Countries.module.css';

const Countries = ({ filteredCountries, setSelectedCountry, darkMode }) => {
  return (
    <div
      className={
        darkMode ? `${styles.countries} ${styles.darkMode}` : styles.countries
      }
    >
      <div className={styles.cards}>
        {filteredCountries.map(country => (
          <div onClick={() => setSelectedCountry(country)} key={country.name}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(Countries);

Countries.propTypes = {
  filteredCountries: PropTypes.array.isRequired,
  setSelectedCountry: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};
