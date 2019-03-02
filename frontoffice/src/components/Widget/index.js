/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import company from '../../data/company';
/**
 * Local import
 */
import Header from './header';
// Styles
import './widget.scss';

/**
 * Code
 */
class Widget extends React.Component {
  // static propTypes = {
  //   apiCall: PropTypes.func.isRequired,
  // };

  componentDidMount() {
    console.log('cdm', company);
  }

  render() {
    const { companyName, companyLogo } = company;
    return (
      <div className="widget">
        <Header companyName={companyName} companyLogo={companyLogo} />
      </div>
    );
  }
}

/**
 * Export
 */
export default Widget;
