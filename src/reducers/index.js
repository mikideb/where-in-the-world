import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import darkModeReducer from './darkModeReducer';

export default combineReducers({
  countries: countriesReducer,
  darkMode: darkModeReducer
});
