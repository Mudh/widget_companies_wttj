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
import Header from './header';
import Footer from './footer';
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
    const { companyName, companyLogo } = company;
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    };
    return (
      <div className="widget">
        <Header
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
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default Widget;