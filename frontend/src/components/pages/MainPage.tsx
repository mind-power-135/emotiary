import React from 'react';
import styled from 'styled-components';
import MainCardSection from '../ui/organisms/MainCardSection';
import Header from '../ui/organisms/Header';

/**
 * 메인화면
 * ex> <MainPage/>
 * */

const Main = styled.div`
`;

const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const MainPage: React.FC<any> = () => {
  // const { cardTag, cardImg, cardColor } = props;

  return (
    <Main>
      <MainWrap>
        <Header/>
        <MainCardSection/>
      </MainWrap>
    </Main>
  );
};

export default MainPage;