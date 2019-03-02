/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */

// Styles
import './app.scss';

/**
 * Code
 */
class App extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    onClickChangeMessage: PropTypes.func.isRequired,
    apiCall: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { apiCall } = this.props;
    apiCall();
  }

  render() {
    const { message, onClickChangeMessage } = this.props;
    return (
      <div id="app" onClick={onClickChangeMessage}>
        {message}
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
