/**
 * NPM import
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
/**
 * Local import
 */
import Widget from '../../containers/Widget';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Router>
      <Widget />
    </Router>
  </div>
);

/**
 * Export
 */
export default App;
