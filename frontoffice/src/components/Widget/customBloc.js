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
    const { blocType, thumbnail } = this.props;

    // Dynamic path for thumbnail
    /* eslint-disable global-require */
    const thumbnailPath = thumbnail
      ? // eslint-disable-next-line import/no-dynamic-require
        require(`../../assets/${thumbnail}`)
      : null; // Return null to avoid render error
    /* eslint-enable global-require */

    const blocStyle = {
      background: `url(${thumbnailPath}) no-repeat center center/cover`,
    };

    return (
      <a
        className={`widget__bloc--${blocType}`}
        href="https://www.welcometothejungle.co/companies/wttj"
        rel="noopener noreferrer"
        target="_blank"
      >
        {thumbnail && <div className="bloc__bg" style={blocStyle} />}
        <span className={`bloc__${blocType}`}>
          {this.customComponent(blocType)}
        </span>
      </a>
    );
  }
}

WidgetCustomBloc.propTypes = {
  blocType: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};

WidgetCustomBloc.defaultProps = {
  thumbnail: null,
};

/**
 * Export
 */
export default WidgetCustomBloc;
