import React from 'react';
import BoxBorder from '../../src/BoxBorder';
import ImageBasic from '../../src/ImageBasic';
import TextBasic from '../../src/TextBasic';

export default () => {
  return (
    <BoxBorder type="border6" className="current-num">
      <ImageBasic type="image1" backgroundSize="1.8rem 0.25rem">
        当前到件量
      </ImageBasic>
      <TextBasic value={12345677} className="current-value" />
    </BoxBorder>
  );
};
