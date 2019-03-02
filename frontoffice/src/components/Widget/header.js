/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { LeftArrowButton, RightArrowButton } from '../Buttons';
/**
 * Local import
 */

// Styles
import './widget.scss';

/**
 * Code
 */
const Header = ({ companyName, companyLogo, onClickPrev, onClickNext }) => {
  /* eslint-disable global-require */
  // eslint-disable-next-line import/no-dynamic-require
  const companyLogoImg = require(`../../assets/${companyLogo}`);
  /* eslint-enable global-require */
  return (
    <div className="widget">
      <header className="widget__header">
        <a
          href="https://www.welcometothejungle.co/companies/wttj"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={companyLogoImg} alt={`logo ${companyName}`} />
          <h1 className="widget__title">{companyName}</h1>
        </a>
        <LeftArrowButton onClickLeft={onClickPrev} />
        <RightArrowButton onClickRight={onClickNext} />
      </header>
    </div>
  );
};

Header.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Header;
