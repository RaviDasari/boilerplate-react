import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Root from './Root';

export default class RootContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    persistor: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    const { store, history, persistor } = this.props;
    return (
      <Root store={store} history={history} scrollToTop={this.scrollToTop} persistor={persistor} />
    );
  }
}
