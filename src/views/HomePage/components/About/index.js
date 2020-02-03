import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import H3 from '../../../../components/H3';
import H4 from '../../../../components/H4';
import Img from '../../../../components/Img';
import WelcomeDesign from './yeux_story_final.png';
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

const AboutUs = ({ id, width, height, screenState }) => {
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
    paddingTop = "5vh";
  }

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <CenteredSection height={height}>
        <H2 color="black">
          Yeux have a story to share, a service to provide, a product to sell, and
          a community to build.
        </H2>
        <H3 color="black">
          We make beautiful websites that support your goals.
        </H3>
        <Img
          className="no-margin"
          src={WelcomeDesign}
          alt="Yeux_about_image"
          style={{
            maxWidth: imageMaxWidth,
            width: 'auto',
            height: 'auto',
          }}
        />
        <SectionBody>
          <H4 color="black">
            We have expertise in web development and design, graphic design, SEO,
            app development, small businesses development, startups, community building, and
            marketing that we want to use to support you and your goals.
          </H4>
        </SectionBody>
      </CenteredSection>
    </SectionWrapper>
  );
}

AboutUs.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default AboutUs;
