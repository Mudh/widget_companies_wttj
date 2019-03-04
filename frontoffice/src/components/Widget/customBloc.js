/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';

/**
 * Local import
 */
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
    const { blocType, thumbnail, quote, title, position } = this.props;

    // Dynamic path for thumbnail
    /* eslint-disable global-require */
    const thumbnailPath = thumbnail
      ? // eslint-disable-next-line import/no-dynamic-require
        require(`../../assets/${thumbnail}`)
      : null; // Return null to avoid render error
    /* eslint-enable global-require */

    // Use a styled component for dynamic css and avoid inline style
    const Bg = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      background: url(${thumbnailPath}) no-repeat center center/cover;
      width: 100%;
      height: 100%;
    `;

    // Parse html tag
    const parsedQuote = parse(quote);

    return (
      <a
        className={`widget__bloc--${blocType}`}
        href="https://www.welcometothejungle.co/companies/wttj"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Bg />
        <span className={`bloc__${blocType}`}>
          {this.customComponent(blocType)}

          {blocType === 'video' && (
            <span>
              <h2>{title}</h2>
              <p>{position}</p>
            </span>
          )}

          {blocType === 'quote' && <p>{parsedQuote}</p>}
        </span>
      </a>
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
  title: '',
  position: '',
  quote: 'What a wonderfull world',
};

/**
 * Export
 */
export default WidgetCustomBloc;
