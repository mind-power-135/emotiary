import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div<{ color?: string }>`
  width: 347px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 10px 10px ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  text-align : center;
`;

const CardTitle = styled.div`
  font-size: 25px;
  padding-top: 4rem;
  padding-bottom: 1.4rem;
  font-weight: bold;
`;

const CardSummary = styled.div`
  font-size: 16px;
  padding-inline: 3em 3em;  
  line-height: 3rem;
`;

const CardImg = styled.div`
  width: auto;
  height: auto;
  font-size: 16px;
  padding-top: 3.6rem;
`;

const CardTag = styled.div`
  font-size: 16px;
  padding-top: 2rem;
`;

interface Props {
  cardtitle: string;
  cardtag: string;
  cardsummary: string;
  children: React.ReactNode;
  cardimg: string;
}

const Card: React.FC<Props> = (props) => {
  const { cardtitle, cardsummary, cardtag, cardimg } = props;

  return (
    <CardDiv>
      <CardTitle>{cardtitle}</CardTitle>
      <br />
      <CardSummary>{cardsummary}</CardSummary>
      <CardImg>{<img src={cardimg} />}</CardImg>
      <CardTag>{cardtag}</CardTag>
    </CardDiv>
  );


};

Card.defaultProps = {
  cardtitle: '아 진짜 동기 화나...',
  cardsummary: '기러기토마토스위스인도인별똥별 기러기토마토스위스인도인별...',
  cardtag: '#슬픔',
  cardimg: 'https://imgur.com/3M8MDMi.png',
};

export default Card;