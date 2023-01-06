import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

interface Props {
  children?: React.ReactNode;
}

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Header: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <StyleHeader>
      <Nav />
      {children}
    </StyleHeader>
  );
};

export default Header;
