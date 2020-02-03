import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { PASTWORKS } from '../data/constants';
import { PastWorkList } from './PastWorkList';

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

    const pastWorkList = PastWorkList(
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
          data={pastWorkList}
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
