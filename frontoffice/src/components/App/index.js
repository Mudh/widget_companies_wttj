/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import Widget from '../Widget';
// Styles
import './app.scss';

/**
 * Code
 */
class App extends React.Component {
  static propTypes = {
    onClickChangeMessage: PropTypes.func.isRequired,
    apiCall: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { apiCall } = this.props;
    apiCall();
  }

  render() {
    const { onClickChangeMessage } = this.props;
    return (
      <div id="app" onClick={onClickChangeMessage}>
        <Widget />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
