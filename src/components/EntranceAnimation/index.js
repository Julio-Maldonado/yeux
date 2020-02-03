import React from 'react';

import PropTypes from 'prop-types';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components';

const colors = [
  '#668B8B',
  '#500000',
  '#708090',
  '#CFC29B',
  '#ffffff',
].reverse();

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 100vw;
  height: 100vh;
  z-index: 999;
`;

const Box = styled.div`
  flex-basis: ${props => props.height}%;
  background: ${props => props.bgColor};
`;

const ContentWrapper = styled.div`
  background: ${props => props.bgColor};
  flex-basis: 100%;
`;

// class EntranceAnimation extends React.Component {
const EntranceAnimation = ({ children, startAnimation, width }) => {
  // state = { flag: true };
  const springVal = width < 760 ? 50000 : 7500;
  // render() {
  //   const { children, startAnimation, width } = this.props;
  //   console.log('width = ', width);
  //   const springVal = width < 760 ? 50000 : 7500;
  return (
    <StaggeredMotion
      defaultStyles={[
        { height: 0 },
        { height: 0 },
        { height: 0 },
        { height: 0 },
        { height: 0 },
        { height: 0 },
      ]}
      styles={prevStyles => [
        // 50000 for mobile vs 1000 for desktop
        {
          height: spring(startAnimation ? 0 : springVal, {
            stiffness: 200,
            damping: 15,
          }),
        },
        { height: spring(prevStyles[0].height) },
        { height: spring(prevStyles[1].height) },
        { height: spring(prevStyles[2].height) },
        { height: spring(prevStyles[3].height) },
        { height: spring(prevStyles[4].height) },
      ]}
    >
      {styles => (
        <Wrapper>
          <Box key="1" bgColor={colors[0]} height={styles[0].height} />
          <Box key="2" bgColor={colors[1]} height={styles[1].height} />
          <Box key="3" bgColor={colors[2]} height={styles[2].height} />
          <Box key="4" bgColor={colors[3]} height={styles[3].height} />
          <Box key="5" bgColor={colors[4]} height={styles[4].height} />
          <Box key="6" bgColor={colors[5]} height={styles[5].height} />
          <ContentWrapper bgColor={colors[6]}>
            {styles[3].height < 50 && children}
          </ContentWrapper>
        </Wrapper>
      )}
    </StaggeredMotion>
  );
};

EntranceAnimation.propTypes = {
  children: PropTypes.object,
  startAnimation: PropTypes.bool,
  // height: PropTypes.number,
  width: PropTypes.object.isRequired,
};

export default EntranceAnimation;
