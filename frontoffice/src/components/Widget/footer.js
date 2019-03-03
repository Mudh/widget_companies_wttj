/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */

// Styles
import './widget.scss';

/**
 * Code
 */
const WidgetFooter = () => {
  /* eslint-disable global-require */
  const wttjLogo = require('../../assets/wttj-long.svg');
  /* eslint-enable global-require */
  return (
    <footer className="widget__footer">
      <a
        className="widget__wttj-link"
        href="https://www.welcometothejungle.co"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={wttjLogo} alt="logo welcome to the jungle" />
      </a>
      <a
        className="widget__profil-link"
        href="https://www.welcometothejungle.co"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>Voir le profil</span>
        <svg viewBox="0 0 5.4 10" width="5.384615384615384" height="10">
          <path
            d="M0.5,9.1L0.5,9.1c0.2,0.2,0.5,0.2,0.8,0c0,0,0,0,0,0l3.5-3.5c0.3-0.3,0.3-0.8,0-1.1L1.3,0.9c-0.2-0.2-0.5-0.2-0.8,0
	        c0,0,0,0,0,0l0,0c-0.2,0.2-0.2,0.6,0,0.8l3.1,3.2C3.7,5,3.7,5,3.7,5.1L0.5,8.3C0.3,8.5,0.3,8.9,0.5,9.1z"
          />
          />
        </svg>
      </a>
    </footer>
  );
};
/**
 * Export
 */
export default WidgetFooter;
