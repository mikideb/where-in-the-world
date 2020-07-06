import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './CountryCard.module.css';

const CountryCard = ({ country, darkMode }) => {
  const { flag, name, population, region, capital } = country;

  return (
    <div
      className={
        darkMode
          ? `${styles.countryCard} ${styles.darkMode}`
          : styles.countryCard
      }
    >
      <img className={styles.flag} src={flag} alt="Flag" />

      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <ul className={styles.list}>
          <li>
            <span>Population:</span>{' '}
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </li>
          <li>
            <span>Region:</span> {region}
          </li>
          <li>
            <span>Capital:</span> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(CountryCard);

CountryCard.propTypes = {
  country: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired
  }).isRequired
};
