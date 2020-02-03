/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import H4 from '../../../../components/H4';
import Img from '../../../../components/Img';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { PASTWORKS } from '../data/constants';

import '../removeMargins.css';

const MenuItem = ({ pastWork, newWidth, pastWorkWidth, pastWorkImageWidth, eachMargin }) => (
  <div
    className="no-margin"
    style={{
      border: 'solid 1px',
      width: pastWorkWidth,
      marginRight: eachMargin,
      marginLeft: eachMargin,
    }}
  >
    <div style={{ marginLeft: '1vw' }}>
      <H2 className="no-margin" style={{ marginBottom: '1vh' }}>
        {pastWork.title}
      </H2>
      <H4 className="no-margin" style={{ marginBottom: '1vh' }}>
        {pastWork.startDate}
      </H4>
      <h6 className="no-margin" style={{ marginBottom: '1vh' }}>
        Project length: {pastWork.projectLength}
      </h6>
    </div>
    <div className="zoom">
      <Img
        src={newWidth < 700 ? pastWork.mobileImage : pastWork.image}
        alt="Website image"
        style={{
          maxWidth: pastWorkImageWidth,
          width: 'auto',
          height: 'auto',
          marginBottom: '1vh',
          marginLeft: (pastWorkWidth - pastWorkImageWidth) / 2,
        }}
      />
    </div>
    <div className="no-margin" style={{ marginLeft: '1vw' }}>
      <H4 className="no-margin" style={{ marginBottom: '1vh' }}>
        {pastWork.subtitle}
      </H4>
      <div className="no-margin" style={{ wordWrap: 'break-word', }}>
        <i className="no-margin">{pastWork.description}</i>
      </div>
      <br />
      <a href={pastWork.url} target="_blank" className="no-margin">
        Visit site
      </a>
    </div>
  </div>
);

MenuItem.propTypes = {
  pastWorkWidth: PropTypes.number,
  pastWork: PropTypes.object,
  // selected: PropTypes.string,
  newWidth: PropTypes.number,
};

export const Menu = (list, selected, width, pastWorkWidth, pastWorkImageWidth, eachMargin) =>
  list.map(el => {
    const { title } = el;
    return (
      <MenuItem
        pastWork={el}
        key={title}
        selected={selected}
        newWidth={width}
        pastWorkWidth={pastWorkWidth}
        pastWorkImageWidth={pastWorkImageWidth}
        eachMargin={eachMargin}
      />
    );
  });

const selected = PASTWORKS[0].title;

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
`;

class PastWork extends React.Component {
  state = { selected };

  translateCounter = 1;

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const {
      id,
      width,
      screenState
    } = this.props;

    let paddingTop = "";
    let pastWorkWidth = 0;
    let eachMargin = 0;
    let pastWorkImageWidth = 0;
    if (screenState === "wide") {
      paddingTop = "5vh";
      pastWorkWidth = width * 0.65;
      pastWorkImageWidth = width * 0.6;
      eachMargin = '2.5vw';
    } else if (screenState === "full") {
      paddingTop = "5vh";
      pastWorkWidth = width * 0.6;
      pastWorkImageWidth = width * 0.45;
      eachMargin = '5vw';
    } else if (screenState === "pacman") {
      paddingTop = "5vh";
      pastWorkWidth = width * 0.8;
      pastWorkImageWidth = width * 0.7;
      eachMargin = '2.5vw';
    } else if (screenState === "half") {
      paddingTop = "7.5vh";
      pastWorkWidth = width * 0.8;
      pastWorkImageWidth = width * 0.75;
      eachMargin = '1.5vw';
    } else if (screenState === "mobile") {
      paddingTop = "5vh";
      pastWorkWidth = width * 0.55;
      pastWorkImageWidth = width * 0.4;
      eachMargin = '5vw';
    }

    const {selected} = this.state;

    const menu = Menu(
      PASTWORKS,
      selected,
      width,
      pastWorkWidth,
      pastWorkImageWidth,
      eachMargin
    );

    return (
      <SectionWrapper id={id} paddingTop={paddingTop}>
        <div style={{ textAlign: 'center' }}>
          <H2>Our Past Work</H2>
        </div>
        <ScrollMenu
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
          hideSingleArrow={true}
          scrollToSelected={true}
          alignCenter={true}
          dragging={false}
          clickWhenDrag={false}
          wheel={false}
        />
      </SectionWrapper>
    );
  }
}

PastWork.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default PastWork;
