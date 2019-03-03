/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PlayIcone, SearchIcone, QuoteIcone } from '../Icones';

/**
 * Code
 */
class WidgetCustomBloc extends React.Component {
  customComponent = type => {
    switch (type) {
      case 'image': {
        return <SearchIcone />;
      }
      case 'video': {
        return <PlayIcone />;
      }
      case 'quote': {
        return <QuoteIcone />;
      }
      default:
        return null;
    }
  };

  render() {
    const { blocType } = this.props;
    /* eslint-disable global-require */
    // eslint-disable-next-line import/no-dynamic-require
    // const companyLogoImg = require(`../../assets/${companyLogo}`);
    /* eslint-enable global-require */
    console.log('blocType', blocType);

    return (
      <a
        className={`widget__bloc--${blocType}`}
        href="https://www.welcometothejungle.co/companies/wttj"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>{this.customComponent(blocType)}</div>
      </a>
    );
  }
}

WidgetCustomBloc.propTypes = {
  blocType: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default WidgetCustomBloc;
