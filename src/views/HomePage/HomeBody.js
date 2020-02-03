/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideMenu from './components/SideMenu';
import Landing from './components/Landing';
import AboutUs from './components/About';
import Strategy from './components/Strategy';
import Services from './components/Services';
import PastWork from './components/PastWork';
import Contact from './components/Contact';

const determineScreenState = (width) => {
  if (width > 1500) {
    return "wide";
  } else if (width > 1200) {
    return "full";
  } else if (width > 900) { // was 992
    return "pacman";
  } else if (width > 700) {
    return "half";
  }
  return "mobile";
}

const HomeBodyWrapper = styled.div`
  max-width: 100vw;
  background: 'white';
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

// const CardWrapper = styled.div`
//   flex: 1;
//   flex-direction: row;
//   // text-align: left;
//   // width: 90vw;
// `;

class HomeBody extends React.Component {
  state = {
    show: false,
    height: 0,
    width: 0,
    scrollFlag: false,
    isOpen: false,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    // if mobile 1500, otherwise 500
    if (this.state.width < this.state.height / 2) {
      setTimeout(() => this.setState({ show: true }), 100);
    } else {
      setTimeout(() => this.setState({ show: true }), 100);
    }
    setTimeout(() => this.updateWindowDimensions(), 500);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  updateScroller = () => {
    this.setState({ scrollFlag: !this.state.scrollFlag });
  }

  updateMenu = () => {
    // this.setState({ isOpen: !this.state.isOpen }) 
    this.setState({ isOpen: false }) 
  }

  render() {
    const { height, width } = this.state;

    const screenState = determineScreenState(width);
    return (
      <HomeBodyWrapper>
        
        {/* {
          this.state.scrollFlag ? 
            <ScrollIntoView id={this.props.location.hash} /> :
            null
        } */}
        <div onClick={() => this.setState({isOpen: !this.state.isOpen})}>
        <SideMenu
          isOpen={this.state.isOpen}
          right
          width={width}
          height={height}
          // pageWrapId="page-wrap"
          // outerContainerId="App"
        />
        </div>
        {/* <EntranceAnimation
          startAnimation={this.state.show}
          height={height}
          width={width}
        > */}
          {/* <Home
            id="home"
            key="home"
            height={height}
            width={width}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
          /> */}
        {/* </EntranceAnimation> */}
        <AnimatedBg key="0">
          <Transition
            key="0"
            height={height}
            from="#ffffff"
            to="#fff"
            position={1}
          >
            <Landing
              id="home"
              key="home"
              width={width}
              height={height}
              screenState={screenState}
            />
          </Transition>
          &nbsp;
          <Transition
            key="1"
            height={height}
            from="#ffffff"
            to="#668B8B"
            position={1}
          >
            <AboutUs
              id="about"
              key="about"
              width={width}
              height={height}
              screenState={screenState}
            />
          </Transition>
          <Transition
            key="2"
            height={height}
            from="#668B8B"
            to="#500000"
            position={1}
          >
            <Strategy
              id="strategy"
              key="strategy"
              width={width}
              height={height}
              screenState={screenState}
            />
          </Transition>
          <Transition
            key="3"
            height={height}
            from="#500000"
            to="#708090"
            position={1}
          >
            <Services
              id="services"
              key="services"
              width={width}
              height={height}
              screenState={screenState}
            />
          </Transition>
          <Transition
            key="4"
            height={height}
            from="#708090"
            to="#CFC29B"
            position={1}
          >
            <PastWork
              id="pastwork"
              key="pastwork"
              width={width}
              height={height}
              screenState={screenState}
            />
          </Transition>
          <Transition
            key="5"
            height={height}
            from="#CFC29B"
            to="#ffffff"
            position={1}
          >
            <Contact
              id="contact"
              key="contact"
              width={width}
              height={height}
              screenState={screenState}
            />
          </Transition>
        </AnimatedBg>
      </HomeBodyWrapper>
    );
  }
}

HomeBody.propTypes = {
  location: PropTypes.object.isRequired,
};

// const colors = ['#ffffff', '#00171F', '#003459', '#007EA7', '#00A8E8'];

export default HomeBody;
