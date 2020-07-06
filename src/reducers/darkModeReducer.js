const getInitialMode = () => {
  const isReturningUser = 'dark' in localStorage;
  const lastMode = JSON.parse(localStorage.getItem('dark'));
  const isUserPrefDark = getPrefColorScheme();
  // if mode was saved -> light/dark
  if (isReturningUser) return lastMode;
  // id user prefers dark -> dark
  else if (isUserPrefDark) return true;
  // otherwise -> light
  else return false;
};

const getPrefColorScheme = () => {
  if (!window.matchMedia) return;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default (state = getInitialMode(), action) => {
  if (action.type === 'TOGGLE_THEME') return action.payload;

  return state;
};
