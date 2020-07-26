import { combineReducers } from 'redux';

import appReducer from './appReducer';

const reducers = {
  appData: appReducer,
};

export default combineReducers({
  ...reducers,
});
