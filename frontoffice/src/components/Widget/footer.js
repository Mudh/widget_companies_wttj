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
const Footer = () => {
  /* eslint-disable global-require */
  const wttjLogo = require('../../assets/wttj-long.svg');
  /* eslint-enable global-require */
  return (
    <footer className="widget__footer">
      <a
        href="https://www.welcometothejungle.co"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={wttjLogo} alt="logo welcome to the jungle" />
      </a>
      <a
        href="https://www.welcometothejungle.co"
        rel="noopener noreferrer"
        target="_blank"
      >
        Voir le profil >
      </a>
    </footer>
  );
};
/**
 * Export
 */
export default Footer;
