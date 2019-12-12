import React from 'react';

// styles
import * as Styled from './styled';

export const CountDown = () => {
  return (
    <Styled.CountDown>
      <Styled.Content>
        <Styled.ContentInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Styled.ContentInfo>
        <Styled.ContentCounter>Counter</Styled.ContentCounter>
      </Styled.Content>
    </Styled.CountDown>
  );
};
