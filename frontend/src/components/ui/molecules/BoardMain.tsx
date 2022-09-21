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
          cardTitle={item.title}
          cardSummary={item.contents}
          cardTag={''}
          cardImg={''}
        />
      ))}
    </StyleBoardMain>
  );
};

export default BoardMain;
