import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Home from './components/Home/Home';

import './App.css';

function App({ darkMode }) {
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Home />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(App);
