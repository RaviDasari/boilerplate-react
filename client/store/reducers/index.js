// import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import counter from './counter';
import todos from './todos';

const config = {
  key: 'root',
  debug: true,
  whitelist: ['counter', 'todos'],
  storage,
};

const reducers = {
  counter,
  todos,
  routing,
};

const rootReducer = persistCombineReducers(config, reducers);

export default rootReducer;
