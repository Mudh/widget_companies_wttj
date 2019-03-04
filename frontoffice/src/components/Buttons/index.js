/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */

// Styles
import './buttons.scss';

/**
 * LeftArrowButton
 */
export const LeftArrowButton = ({ onClickLeft }) => (
  <button className="button button--arrow" type="button" onClick={onClickLeft}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.4 10"
      width="5.384615384615384"
      height="10"
    >
      <path
        d="M4.8,0.9L4.8,0.9c-0.2-0.2-0.5-0.2-0.8,0c0,0,0,0,0,0L0.6,4.5c-0.3,0.3-0.3,0.8,0,1.1l3.5,3.5c0.2,0.2,0.5,0.2,0.8,0
	        c0,0,0,0,0,0l0,0c0.2-0.2,0.2-0.6,0-0.8L1.7,5.1C1.7,5,1.7,5,1.7,4.9l3.1-3.2C5.1,1.5,5.1,1.1,4.8,0.9z"
      />
    </svg>
  </button>
);

LeftArrowButton.propTypes = {
  onClickLeft: PropTypes.func.isRequired,
};

/**
 * RightArrowButton
 */
export const RightArrowButton = ({ onClickRight }) => (
  <button className="button button--arrow" type="button" onClick={onClickRight}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.4 10"
      width="5.384615384615384"
      height="10"
    >
      <path
        d="M0.5,9.1L0.5,9.1c0.2,0.2,0.5,0.2,0.8,0c0,0,0,0,0,0l3.5-3.5c0.3-0.3,0.3-0.8,0-1.1L1.3,0.9c-0.2-0.2-0.5-0.2-0.8,0
	        c0,0,0,0,0,0l0,0c-0.2,0.2-0.2,0.6,0,0.8l3.1,3.2C3.7,5,3.7,5,3.7,5.1L0.5,8.3C0.3,8.5,0.3,8.9,0.5,9.1z"
      />
      />
    </svg>
  </button>
);

RightArrowButton.propTypes = {
  onClickRight: PropTypes.func.isRequired,
};
