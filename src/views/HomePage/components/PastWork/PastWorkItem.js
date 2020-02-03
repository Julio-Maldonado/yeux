import React from 'react';

import PropTypes from 'prop-types';

import H2 from '../../../../components/H2';
import H4 from '../../../../components/H4';
import Img from '../../../../components/Img';

const PastWorkItem = ({ pastWork, newWidth, pastWorkWidth, pastWorkImageWidth, eachMargin }) => (
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

PastWorkItem.propTypes = {
  pastWorkWidth: PropTypes.number,
  pastWork: PropTypes.object,
  // selected: PropTypes.string,
  newWidth: PropTypes.number,
};

export default PastWorkItem;
