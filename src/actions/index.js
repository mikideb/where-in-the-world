import restCountries from '../apis/restCountries';
import * as types from './types';

export const fetchCountries = () => async dispatch => {
  const response = await restCountries.get('/all');

  dispatch({
    type: types.FETCH_COUNTRIES,
    payload: response.data
  });
};

export const toggleDarkMode = isDarkMode => {
  return {
    type: types.TOGGLE_THEME,
    payload: isDarkMode
  };
};
