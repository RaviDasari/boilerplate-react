import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import { enableBatching } from 'redux-batched-actions';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

const middleware = compose(applyMiddleware(...middlewares));

export default function configureStore(preloadedState) {
  const store = createStore(
    enableBatching(rootReducer),
    preloadedState,
    middleware,
  );
  const persistor = persistStore(store);

  return { persistor, store };
}
