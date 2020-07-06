import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './CountryDetail.module.css';

import { ReactComponent as BackIcon } from '../../assets/arrow-left.svg';

const CountryDetail = ({
  setSearch,
  selectedCountry,
  setSelectedCountry,
  countries,
  darkMode
}) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = selectedCountry;

  const detailsMap = [
    { headline: 'Native name', content: nativeName },
    {
      headline: 'Population',
      content: population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    { headline: 'Region', content: region },
    { headline: 'Sub Region', content: subregion },
    { headline: 'Capital', content: capital },
    { headline: 'Top Level Domain', content: topLevelDomain },
    { headline: 'Currencies', content: currencies[0].name },
    {
      headline: 'Languages',
      content: languages.map(language => language.name).join(', ')
    }
  ];

  const countryCodesToObjects = borders.map(border =>
    countries.filter(country => country.alpha3Code === border).pop()
  );

  return (
    <div
      className={
        darkMode
          ? `${styles.countryDetail} ${styles.darkMode}`
          : styles.countryDetail
      }
    >
      <div className={styles.subContainer1}>
        <div
          onClick={() => {
            setSelectedCountry({});
            setSearch('');
          }}
          className={
            darkMode
              ? `${styles.backBtn} ${styles.darkBackBtn}`
              : styles.backBtn
          }
        >
          <BackIcon
            className={styles.backIcon}
            style={{
              fill: darkMode ? 'rgb(255, 255, 255)' : 'rgb(17, 21, 23)'
            }}
          />
          <span>Back</span>
        </div>
      </div>
      <div className={styles.container}>
        <img src={flag} alt="Flag" className={styles.flag} />

        <div className={styles.subContainer2}>
          <div className={styles.name}>{name}</div>
          <div className={styles.details}>
            {detailsMap.map(detail => (
              <p key={detail.headline}>
                <span>{detail.headline}:</span> {detail.content}
              </p>
            ))}
          </div>

          {borders.length !== 0 && (
            <div className={styles.borders}>
              <span>Border Countries:</span>
              <div className={styles.countryBtnsContainer}>
                {countryCodesToObjects.map(countryObj => (
                  <button
                    key={countryObj.name}
                    onClick={() => setSelectedCountry(countryObj)}
                    className={
                      darkMode
                        ? `${styles.countryBtn} ${styles.darkCountryBtn}`
                        : styles.countryBtn
                    }
                  >
                    {countryObj.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    countries: state.countries,
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(CountryDetail);

CountryDetail.propTypes = {
  setSearch: PropTypes.func.isRequired,
  selectedCountry: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nativeName: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    topLevelDomain: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    languages: PropTypes.array.isRequired,
    borders: PropTypes.array.isRequired
  }).isRequired,
  setSelectedCountry: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
  darkMode: PropTypes.bool.isRequired
};
