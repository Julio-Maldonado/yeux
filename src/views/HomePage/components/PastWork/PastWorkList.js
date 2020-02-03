import React from 'react';

import PastWorkItem from './PastWorkItem';

export const PastWorkList = (list, selected, width, pastWorkWidth, pastWorkImageWidth, eachMargin) =>
  list.map(el => {
    const { title } = el;
    return (
      <PastWorkItem
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