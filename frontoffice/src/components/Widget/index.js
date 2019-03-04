/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
/**
 * Local import
 */
import WidgetHeader from './header';
import WidgetFooter from './footer';
import WidgetCustomBloc from './customBloc';
// Styles
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './widget.scss';

/**
 * Code
 */
class Widget extends React.Component {
  static propTypes = {
    dataCompany: PropTypes.object.isRequired,
    apiCall: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleOnClickNext = this.handleOnClickNext.bind(this);
    this.handleOnClickPrev = this.handleOnClickPrev.bind(this);
    this.swiper = null;
  }

  componentDidMount() {
    /* 
      This is where we load API data 
      and dispatch action to tell redux to store it 
      It's a fake api coming from https://jsonplaceholder.typicode.com/

      The widget data are store in redux but came from 'frontoffice/src/data/company.js'
    */
    const { apiCall, history, location } = this.props;
    apiCall();

    // Push default column/row query on page load
    const locationValue = location.search;
    if (locationValue === '') {
      history.push('/embed?columns=3&rows=2');
    }
  }

  handleOnClickNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  handleOnClickPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    const { dataCompany, location } = this.props;
    const { companyName, companyLogo, widgetBlocs } = dataCompany;

    // Swiper columns and rows are manage by a simple query string
    const query = queryString.parse(location.search);
    console.log('query', query);
    const row = query.rows !== undefined ? parseInt(query.rows, 10) : 2;
    const column = query.rows !== undefined ? parseInt(query.columns, 10) : 3;

    // Swiper params
    const params = {
      speed: 1000,
      slidesPerView: column,
      slidesPerGroup: column,
      slidesPerColumn: row,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        375: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
    };

    // Use a styled component for dynamic css and avoid inline style
    const SwiperSlide = styled.div`
      height: calc(100% / ${row});
    `;

    return (
      <div className="widget">
        <WidgetHeader
          onClickPrev={this.handleOnClickPrev}
          onClickNext={this.handleOnClickNext}
          companyName={companyName}
          companyLogo={companyLogo}
        />
        <Swiper
          {...params}
          ref={node => {
            if (node) this.swiper = node.swiper;
          }}
        >
          {widgetBlocs.map(bloc => (
            <SwiperSlide key={uuid()}>
              <WidgetCustomBloc {...bloc} />
            </SwiperSlide>
          ))}
        </Swiper>
        <WidgetFooter />
      </div>
    );
  }
}

/**
 * Export
 */
export default withRouter(Widget);
