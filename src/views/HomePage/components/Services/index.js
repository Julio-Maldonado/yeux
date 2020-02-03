import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import H4 from '../../../../components/H4';
import Img from '../../../../components/Img';
import SEOIcon from './digital_marketing_and_seo_final.png';
import AnalyticsIcon from './real_time_analytics_v2.png';
import CrossPlatformIcon from './cross_platform_friendly_v2.png';
import RelevantDesignsIcons from './relevant_designs_v3.png';

const ServiceWrapper = styled.div`
  display: flex;
  height: ${props => props.height / 5}px;
  align-items: center;
`;

const ServiceImageWrapper = styled.div`
  align-items: center;
  width: ${props => props.width * 0.5}px;
  align-content: center;
  text-align: center;
  justify-content: center;
`;

const ServiceTextWrapper = styled.div`
  align-items: flex-start;
  width: ${props => props.width * 0.5}px;
  justify-content: center;
`;

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 5vh;
`;

const Services = ({ id, width, height, screenState }) => {
  let paddingTop = "";
  if (screenState === "wide") {
    paddingTop = "5vh";
  } else if (screenState === "full") {
    paddingTop = "5vh";
  } else if (screenState === "pacman") {
    paddingTop = "5vh";
  } else if (screenState === "half") {
    paddingTop = "7.5vh";
  } else if (screenState === "mobile") {
    paddingTop = "5vh";
  }

  const imgStyle = {
    maxHeight: height,
    width: 'auto',
    height: 'auto',
  }

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <div style={{ textAlign: 'center' }}>
        <H2 color="#F2F2F2">Some of our Services</H2>
      </div>
      <ServiceWrapper height={height}>
        <ServiceImageWrapper width={width}>
          <Img
            src={SEOIcon}
            alt="SEO_icon_image"
            style={imgStyle}
          />
        </ServiceImageWrapper>
        <ServiceTextWrapper width={width}>
          <h3 style={{ color: '#F2F2F2' }}>Digital Marketing and SEO</h3>
          <H4 color="#F2F2F2" style={{ marginRight: '10vw' }}>
            Attract leads that actually <i>matter</i>.
          </H4>
        </ServiceTextWrapper>
      </ServiceWrapper>
      <ServiceWrapper height={height}>
        <ServiceImageWrapper width={width}>
          <Img
            src={AnalyticsIcon}
            alt="Analytis_icon_image"
            style={imgStyle}
          />
        </ServiceImageWrapper>
        <ServiceTextWrapper width={width}>
          <h3 style={{ color: '#F2F2F2' }}>Real Time Analytics</h3>
          <H4 color="#F2F2F2" style={{ marginRight: '10vw' }}>
            Discover who&#39;s visiting your site and <i>why</i>.
          </H4>
        </ServiceTextWrapper>
      </ServiceWrapper>
      <ServiceWrapper height={height}>
        <ServiceImageWrapper width={width}>
          <Img
            src={CrossPlatformIcon}
            alt="Cross Platform_icon_image"
            style={imgStyle}
          />
        </ServiceImageWrapper>
        <ServiceTextWrapper width={width}>
          <h3 style={{ color: '#F2F2F2' }}>Cross Platform Friendly</h3>
          <H4 color="#F2F2F2" style={{ marginRight: '10vw' }}>
            We&#39;ll ensure a <i>seamless</i> mobile and desktop experience.
          </H4>
        </ServiceTextWrapper>
      </ServiceWrapper>
      <ServiceWrapper height={height}>
        <ServiceImageWrapper width={width}>
          <Img
            src={RelevantDesignsIcons}
            alt="Relevant Designs_icon_image"
            style={imgStyle}
          />
        </ServiceImageWrapper>
        <ServiceTextWrapper width={width}>
          <h3 style={{ color: '#F2F2F2' }}>Relevant Designs</h3>
          <H4 color="#F2F2F2" style={{ marginRight: '10vw' }}>
            Using <i>your</i> preferences, we&#39;ll deliver a modern and
            beautifully designed site.
          </H4>
        </ServiceTextWrapper>
      </ServiceWrapper>
    </SectionWrapper>
  );
}

Services.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default Services;
