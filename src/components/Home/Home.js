import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../../actions';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Countries from '../Countries/Countries';
import CountryDetail from '../CountryDetail/CountryDetail';
import SearchBox from '../SearchBox/SearchBox';
import RegionDropdown from '../RegionDropdown/RegionDropdown';

import styles from './Home.module.css';

const Home = ({ countries, fetchCountries }) => {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  useEffect(() => {
    setFilteredCountries(
      selectedRegion
        ? countries.filter(country => country.region === selectedRegion)
        : countries
    );
  }, [selectedRegion, countries, search]);

  useEffect(() => {
    if (search) {
      setFilteredCountries(prevCountries =>
        prevCountries.filter(country =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [selectedRegion, countries, search]);

  return (
    <>
      <Header />
      {Object.keys(selectedCountry).length === 0 && (
        <div className={styles.searchBar}>
          <SearchBox setSearch={setSearch} />
          <RegionDropdown setSelectedRegion={setSelectedRegion} />
        </div>
      )}
      {Object.keys(selectedCountry).length === 0 ? (
        <Countries
          filteredCountries={filteredCountries}
          setSelectedCountry={setSelectedCountry}
          setSearch={setSearch}
          setSelectedRegion={setSelectedRegion}
        />
      ) : (
        <CountryDetail
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          setSearch={setSearch}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

export default connect(mapStateToProps, { fetchCountries })(Home);

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  fetchCountries: PropTypes.func.isRequired
};
