import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from '../../ui/reducers';
import rootSaga from '../../ui/sagas';

// Build the middleware for intercepting and dispatching navigation actions

const initialState = {};
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history = {}) {
  let store;

  const historyMiddleware = routerMiddleware(history);

  if (module.hot) {
    // Support hot reloading of components
    // Enable Webpack hot module replacement for reducers
    const composeEnhancers = composeWithDevTools({});
    const devToolMiddleware = composeEnhancers(
      applyMiddleware(
        historyMiddleware,
        sagaMiddleware,
        logger,
      ));

    store = createStore(
      rootReducer,
      initialState,
      devToolMiddleware,
    );

    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        historyMiddleware,
        sagaMiddleware,
      ),
    );
  }

  sagaMiddleware.run(rootSaga);
  persistStore(store, null);

  return store;
}
