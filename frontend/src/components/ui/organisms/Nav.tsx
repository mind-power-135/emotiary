import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';
import { StyleHr } from '../atoms/Hr';
import { HiSearch, HiOutlineBell, HiMenu } from 'react-icons/hi';
import IconInput from '../atoms/IconInput';

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
`;

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const VerticalHr = styled(StyleHr)`
  width: 0.2vw;
`;

const Button = () => {
  return (
    <StyleNav>
      <Logo />
      <StyleDiv>
        <IconInput type={'text'} name={'search'} placeholder={'검색'}>
          <HiSearch />
        </IconInput>
        <VerticalHr height={5} bgColor={'#999999'} />
        <Icon setIconClickEvent={() => {}}>
          <HiOutlineBell />
        </Icon>
        <Icon setIconClickEvent={() => {}}>
          <HiMenu />
        </Icon>
      </StyleDiv>
    </StyleNav>
  );
};

export default Button;
