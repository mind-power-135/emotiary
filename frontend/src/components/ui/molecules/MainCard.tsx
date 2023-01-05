import React from 'react';
import styled from 'styled-components';

/**
 * 메인화면 감정 종류 카드
 * ex> <MainCard cardImg={"sad.png"} cardTag={"슬픔"} cardColor={"#aabbcc"}/>
 * */

interface Props {
  cardTag: string;
  cardImg: string;
  cardColor: string;
}

const CardDiv = styled.div<{ color: string }>`
  width: 25rem;
  height: 25rem;
  border: 1px solid ${({ color }) => color};
  border-radius: 1rem;
  box-shadow: 1rem 1rem ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CardTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
`;

const MainCard: React.FC<Props> = (props) => {
  const { cardTag, cardImg, cardColor } = props;

  return (
    <CardDiv color={cardColor}>
      <CardTitle>{cardTag}</CardTitle>
      <CardImg src={cardImg}></CardImg>
    </CardDiv>
  );
};

MainCard.defaultProps = {
  cardTag: '슬픔',
  cardImg: 'https://imgur.com/3M8MDMi.png',
  cardColor: 'red',
};

export default MainCard;