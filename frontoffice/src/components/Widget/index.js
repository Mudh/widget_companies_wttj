/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import uuid from 'uuid/v4';
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
    const { apiCall } = this.props;
    apiCall();
  }

  handleOnClickNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  handleOnClickPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    const { dataCompany } = this.props;
    const { companyName, companyLogo, widgetBlocs } = dataCompany;

    const row = 2;
    const column = 3;
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
export default Widget;
