import React from 'react';
import styled from 'styled-components';
import MainCard from '../molecules/MainCard';

/**
 * 메인화면 감정 종류 카드 wrap
 * ex> <MainCardArea/>
 * */

const MainCardWrap = styled.div`
  height: 80vh;
  position: relative;
`;

const VerBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  
  &:nth-child(2){
    top: 24rem;
  }
  
  > div{
    position: absolute;
    transform: translate(-50%, 0);
    transition: transform .5s;
    transform-origin: center bottom;
  }
  
  > div:hover{
    z-index: 99 !important;
    transition: transform .5s;
  }
  
  // 윗줄
  &:nth-child(1)> div:nth-child(1){
    top: 8rem;
    left: calc(50% - (25rem * 2) + (5rem * 2));
    transform: translate(-50%, 0) rotate(-20deg);
    z-index: 1;
  }
  &:nth-child(1)> div:nth-child(2){
    top: 2rem;
    left: calc(50% - 25rem + 5rem);
    transform: translate(-50%, 0) rotate(-10deg);
    z-index: 2;
  }
  &:nth-child(1)> div:nth-child(3){
    top: 0;
    left: 50%;
    z-index: 3;
  }
  &:nth-child(1)> div:nth-child(4){
    top: 2rem;
    left: calc(50% + 25rem - 5rem);
    transform: translate(-50%, 0) rotate(10deg);
    z-index: 2;
  }
  &:nth-child(1)> div:nth-child(5){
    top: 8rem;
    left: calc(50% + (25rem * 2) - (5rem * 2));
    transform: translate(-50%, 0) rotate(20deg);
    z-index: 1;
  }
  
  //아랫줄
  &:nth-child(2)> div:nth-child(1){
    top: 6rem;
    left: calc(50% - 30rem);
    transform: translate(-50%, 0) rotate(-20deg);
    z-index: 3;
  }
  &:nth-child(2)> div:nth-child(2){
    top: 0rem;
    left: calc(50% - (25rem/2) + 2rem);
    transform: translate(-50%, 0) rotate(-10deg);
    z-index: 4;
  }
  &:nth-child(2)> div:nth-child(3){
    top: 0rem;
    left: calc(50% + (25rem/2) - 2rem);
    transform: translate(-50%, 0) rotate(10deg);
    z-index: 4;
  }
  &:nth-child(2)> div:nth-child(4){
    top: 6rem;
    left: calc(50% + 30rem);
    transform: translate(-50%, 0) rotate(20deg);
    z-index: 3;
  }
  
  // transform 속성 상속이 안되므로 하드 코딩
  &:nth-child(1)> div:nth-child(1):hover{transform: translate(-50%, 0) rotate(-20deg) scale(1.1) !important;}
  &:nth-child(1)> div:nth-child(2):hover{transform: translate(-50%, 0) rotate(-10deg) scale(1.1) !important;}
  &:nth-child(1)> div:nth-child(3):hover{transform: translate(-50%, 0) scale(1.1) !important;}
  &:nth-child(1)> div:nth-child(4):hover{transform: translate(-50%, 0) rotate(10deg) scale(1.1) !important;}
  &:nth-child(1)> div:nth-child(5):hover{transform: translate(-50%, 0) rotate(20deg) scale(1.1) !important;}
  &:nth-child(2)> div:nth-child(1):hover{transform: translate(-50%, 0) rotate(-20deg) scale(1.1) !important;}
  &:nth-child(2)> div:nth-child(2):hover{transform: translate(-50%, 0) rotate(-10deg) scale(1.1) !important;}
  &:nth-child(2)> div:nth-child(3):hover{transform: translate(-50%, 0) rotate(10deg) scale(1.1) !important;}
  &:nth-child(2)> div:nth-child(4):hover{transform: translate(-50%, 0) rotate(20deg) scale(1.1) !important;}
`;

// todo : 추후 restApi로 리스트 받아오기
const emotions = [{
  id: 1,
  name: "슬픔1",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔2",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔3",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔4",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔5",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔6",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔7",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔8",
  color: "#aabbcc"
},{
  id: 1,
  name: "슬픔9",
  color: "#aabbcc"
}]

const MainCardSection: React.FC<any> = () => {

  return (
    <MainCardWrap>
        <VerBox>
          {emotions.slice(0, 5).map((item, idx) => (
              <MainCard cardImg={`/${item.id}.png`} cardTag={item.name} cardColor={item.color} />
          ))}
        </VerBox>
        <VerBox>
          {emotions.slice(5, 9).map((item, index) => (
              <MainCard cardImg={`/${item.id}.png`} cardTag={item.name} cardColor={item.color} />
          ))}
        </VerBox>
    </MainCardWrap>
  );
};

export default MainCardSection;