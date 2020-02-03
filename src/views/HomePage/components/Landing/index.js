import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import H3 from '../../../../components/H3';
import H4 from '../../../../components/H4';
import Img from '../../../../components/Img';
import HomeDesign from './home_design_final.png';
import YeuxLogo from './Yeux_50px_v2.png';
import CenteredSection from '../../../../components/CenteredSection';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
  height: 100vh;
  width: 98vw;
  margin: 0 auto;
`;

const SectionBody = styled.div`
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const Home = ({ id, width, height, screenState }) => {
  let [imageMaxWidth, logoImageHeight, logoImageMarginRight] = [0, 0, 0];
  let paddingTop = "";
  if (screenState === "wide") {
    imageMaxWidth = width * 0.55;
    logoImageHeight = 20;
    logoImageMarginRight = 4;
    paddingTop = "5vh";
  } else if (screenState === "full") {
    imageMaxWidth = width * 0.45;
    logoImageHeight = 20;
    logoImageMarginRight = 4;
    paddingTop = "5vh";
  } else if (screenState === "pacman") {
    imageMaxWidth = width * 0.65;
    logoImageHeight = 17;
    logoImageMarginRight = 4;
    paddingTop = "5vh";
  } else if (screenState === "half") {
    imageMaxWidth = width * 0.85;
    logoImageHeight = 17;
    logoImageMarginRight = 3;
    paddingTop = "7.5vh";
  } else if (screenState === "mobile") {
    imageMaxWidth = width * 1;
    logoImageHeight = 14;
    logoImageMarginRight = 2;
    paddingTop = "10vh";
  }

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <CenteredSection height={height}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Img
            className="no-margin"
            src={YeuxLogo}
            alt="Yeux_text_logo"
            style={{
              width: 'auto',
              height: logoImageHeight,
              margin: 0,
              marginRight: logoImageMarginRight,
              padding: 0,
            }}
          />
          <H2 className="no-margin">have a vision.</H2>
        </div>
        <H3>We want to make it a reality.</H3>
        <Img
          src={HomeDesign}
          alt="Yeux_landing_image"
          style={{
            maxHeight: height,
            maxWidth: imageMaxWidth,
            width: 'auto',
            height: 'auto',
          }}
        />
        <SectionBody>
          <H4>
            We focus on supporting small minority-owned businesses because we
            believe having a fast, cost-effective, and beautiful website should be
            easy for <i>everybody</i>.
          </H4>
        </SectionBody>
      </CenteredSection>
    </SectionWrapper>
  );
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default Home;
