import React from 'react';
import styled from 'styled-components';

const IconImg = styled.i`
  width: 2rem; height 2rem;
  color: #666666;
`;

interface Props {
  children: React.ReactNode;
  setIconClickEvent: (e: React.MouseEvent<HTMLElement>) => void;
}

const Icon: React.FC<Props> = (props) => {
  const { children, setIconClickEvent } = props;

  return (
    <IconImg onClick={(e: React.MouseEvent<HTMLElement>) => setIconClickEvent(e)}>
      {children}
    </IconImg>
  );
};

export default Icon;