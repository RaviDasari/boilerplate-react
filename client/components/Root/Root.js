import React from 'react';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';

export default function Root(props) {
  const { store, history, persistor, scrollToTop } = props;
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router onUpdate={scrollToTop} history={history} routes={routes} />
      </Provider>
    </PersistGate>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  scrollToTop: PropTypes.func.isRequired,
};
