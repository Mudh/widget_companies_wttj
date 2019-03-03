/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import company from '../../data/company';
/**
 * Local import
 */
import WidgetHeader from './header';
import WidgetFooter from './footer';
import WidgetCustomBloc from './customBloc';
// Styles
import './widget.scss';

/**
 * Code
 */
class Widget extends React.Component {
  // static propTypes = {
  //   goNext: PropTypes.func.isRequired,
  //   goPrev: PropTypes.func.isRequired,
  // };

  constructor(props) {
    super(props);
    this.handleOnClickNext = this.handleOnClickNext.bind(this);
    this.handleOnClickPrev = this.handleOnClickPrev.bind(this);
    this.swiper = null;
  }

  componentDidMount() {
    console.log('cdm', company);
  }

  handleOnClickNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  handleOnClickPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    const { companyName, companyLogo, widgetBlocs } = company;
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

    const blocStyle = {
      height: `calc(100% / ${row})`,
    };

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
            <div style={blocStyle}>
              <WidgetCustomBloc {...bloc} />
            </div>
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
