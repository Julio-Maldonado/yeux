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
  } else if (width > 900) {
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

const COLORS = ['#ffffff', '#668B8B', '#500000', '#708090', '#CFC29B'];

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
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => { this.setState({ width: window.innerWidth, height: window.innerHeight }) };

  componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }

  render() {
    const { height, width } = this.state;

    const screenState = determineScreenState(width);
    const props = { height, width, screenState };

    return (
      <HomeBodyWrapper>
        <div onClick={() => this.setState({isOpen: !this.state.isOpen})}>
        <SideMenu
          right
          width={width}
          isOpen={this.state.isOpen}
        />
        </div>
        <AnimatedBg>
          <Transition from={COLORS[0]} to={COLORS[0]} position={1}>
            <Landing id="landing" {...props} />
          </Transition>
          &nbsp;
          <Transition from={COLORS[0]} to={COLORS[1]} position={1}>
            <AboutUs id="about" {...props} />
          </Transition>
          <Transition from={COLORS[1]} to={COLORS[2]} position={1}>
            <Strategy id="strategy" {...props} />
          </Transition>
          <Transition from={COLORS[2]} to={COLORS[3]} position={1}>
            <Services id="services" {...props} />
          </Transition>
          <Transition from={COLORS[3]} to={COLORS[4]} position={1}>
            <PastWork id="pastwork" {...props} />
          </Transition>
          <Transition from={COLORS[4]} to={COLORS[0]} position={1}>
            <Contact id="contact" {...props} />
          </Transition>
        </AnimatedBg>
      </HomeBodyWrapper>
    );
  }
}

HomeBody.propTypes = {
  location: PropTypes.object.isRequired,
};

export default HomeBody;
