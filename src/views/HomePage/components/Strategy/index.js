import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import H3 from '../../../../components/H3';
import H4 from '../../../../components/H4';
import Img from '../../../../components/Img';
import YeuxGroundUp from './yeux_ground_up_final.png';
import CenteredSection from '../../../../components/CenteredSection';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
`;

const SectionBody = styled.div`
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const Strategy = ({ id, width, height, screenState }) => {
  let imageMaxWidth = 0;
  let paddingTop = "";
  if (screenState === "wide") {
    imageMaxWidth = width * 0.55;
    paddingTop = "5vh";
  } else if (screenState === "full") {
    imageMaxWidth = width * 0.45;
    paddingTop = "5vh";
  } else if (screenState === "pacman") {
    imageMaxWidth = width * 0.65;
    paddingTop = "5vh";
  } else if (screenState === "half") {
    imageMaxWidth = width * 0.85;
    paddingTop = "7.5vh";
  } else if (screenState === "mobile") {
    imageMaxWidth = width * 1;
    paddingTop = "7.5vh";
  }

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <CenteredSection height={height}>
        <H2 color="#F2F2F2">
          Yeux need to be confident our strategy will work for you.
        </H2>
        <H3 color="#F2F2F2">
          We&#39;ll guide the process from the very beginning to bring your
          website to life and that you&#39;re happy from start to end.
        </H3>
        <Img
          className="no-margin"
          src={YeuxGroundUp}
          alt="Yeux_strategy_image"
          style={{
            maxHeight: height,
            maxWidth: imageMaxWidth,
            width: 'auto',
            height: 'auto',
          }}
        />
        <SectionBody>
          <H4 color='#F2F2F2'>
            We love working with real people and once we have answered all of your
            questions, we&#39;ll ask ours to ensure complete understanding of your
            needs and that we deliver on them.
          </H4>
        </SectionBody>
      </CenteredSection>
    </SectionWrapper>
  );
}

Strategy.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default Strategy;
