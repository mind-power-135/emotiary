import React from 'react';
import styled from 'styled-components';

interface Props {
  height?: number;
  bgColor?: string;
}

const StyleHr = styled.hr<{ height?: number; bgColor?: string }>`
  height: ${({ height }) => (height ? height + 'px' : '2px')};
  border: 0;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#000000')};
`;

const Hr: React.FC<Props> = (props: Props) => {
  const { height, bgColor } = props;

  return <StyleHr height={height} bgColor={bgColor} />;
};

export default Hr;
