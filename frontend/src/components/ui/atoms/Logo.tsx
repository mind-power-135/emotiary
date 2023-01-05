import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
`;

const Logo: React.FC<any> = () => {

  return (
    <H1>EMOTIARY</H1>
  );
};

export default Logo;