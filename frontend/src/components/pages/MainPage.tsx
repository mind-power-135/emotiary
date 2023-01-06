import React from 'react';
import styled from 'styled-components';
import MainCardSection from '../ui/organisms/MainCardSection';
import Header from '../ui/organisms/Header';
import glitter from '../../asset/img/glitter.png';

/**
 * 메인화면
 * ex> <MainPage/>
 * */

const Main = styled.div<{ color: string }>`
  background: ${({ color }) => (color ? color : '#aabbcc')};
`;

const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  background-image: url(${glitter});
`;

const MainPage: React.FC<any> = () => {
  return (
    <Main color={"#aabbcc"}>
      <MainWrap>
        <Header/>
        <MainCardSection/>
      </MainWrap>
    </Main>
  );
};

export default MainPage;