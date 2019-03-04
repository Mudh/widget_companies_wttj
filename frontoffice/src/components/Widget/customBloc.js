/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

/**
 * Local import
 */
import { PlayIcone, SearchIcone, QuoteIcone } from '../Icones';

/**
 * Code
 */
class WidgetCustomBloc extends React.Component {
  customComponent = (type, style, title, position, quote) => {
    switch (type) {
      case 'image': {
        return (
          <a
            className="widget__bloc--image"
            href="https://www.welcometothejungle.co/companies/wttj"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bloc__bg" style={style} />

            <span className="bloc__image">
              <SearchIcone />
            </span>
          </a>
        );
      }
      case 'video': {
        return (
          <a
            className="widget__bloc--video"
            href="https://www.welcometothejungle.co/companies/wttj"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bloc__bg" style={style} />

            <span className="bloc__video">
              <PlayIcone />
              <span>
                <h2>{title}</h2>
                <p>{position}</p>
              </span>
            </span>
          </a>
        );
      }
      case 'quote': {
        return (
          <a
            className="widget__bloc--quote"
            href="https://www.welcometothejungle.co/companies/wttj"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="bloc__quote">
              <QuoteIcone />
              <p>{parse(quote)}</p>
            </span>
          </a>
        );
      }
      default:
        return null;
    }
  };

  render() {
    const { blocType, thumbnail, quote, title, position } = this.props;

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
      <div style={{ height: '100%', width: '100%' }}>
        {this.customComponent(blocType, blocStyle, title, position, quote)}
      </div>
    );
  }
}

WidgetCustomBloc.propTypes = {
  blocType: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  quote: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
};

WidgetCustomBloc.defaultProps = {
  thumbnail: null,
  title: 'John Doe',
  position: 'CTO',
  quote: 'What a wonderfull world',
};

/**
 * Export
 */
export default WidgetCustomBloc;
