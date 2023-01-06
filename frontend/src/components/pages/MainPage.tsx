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
  gap: 5rem;
  background-image: url(${glitter});
`;

const MainPage: React.FC<any> = () => {
  return (
    <Main color={"#aabbcc"}>
      <MainWrap>
        <Header/>
        <div>
          <div style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#555'
          }}>2022.00.00 마지막 감정</div>
          <div style={{
            marginTop: '2rem',
            fontSize: '4rem',
            fontWeight: 'bold',
          }}>‘기쁨’</div>
        </div>
        <MainCardSection/>
      </MainWrap>
    </Main>
  );
};

export default MainPage;