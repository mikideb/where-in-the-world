export default (state = [], action) => {
  if (action.type === 'FETCH_COUNTRIES') return action.payload;

  return state;
};
