import { routerReducer } from 'react-router-redux';
import storage from 'redux-persist/lib/storage';
import { persistCombineReducers } from 'redux-persist';
import todos from './Todos';

const chalkTalkConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = persistCombineReducers(chalkTalkConfig, {
  router: routerReducer,
  todos,
});

export default rootReducer;