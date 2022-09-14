import React from 'react';
import styled from 'styled-components';
import { data } from '../../../asset/data';
import Card from './Card';

const StyleBoardMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;
`;

const BoardMain = () => {
  return (
    <StyleBoardMain>
      {data.map(item => (
        <Card
          cardtitle={item.title}
          cardsummary={item.contents}
          cardtag={''}
          children={undefined}
          cardimg={''}
        />
      ))}
    </StyleBoardMain>
  );
};

export default BoardMain;
