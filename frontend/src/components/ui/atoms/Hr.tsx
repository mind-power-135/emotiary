import React from 'react';
import styled from 'styled-components';

interface Props {
  height?: number;
  width?: number;
  bgColor?: string;
}

export const StyleHr = styled.hr<{
  height?: number;
  width?: number;
  bgColor?: string;
}>`
  height: ${({ height }) => (height ? height + 'vh' : '0vh')};
  width: ${({ width }) => (width ? width + 'vh' : '100%')};
  border: 0;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#000000')};
`;

const Hr: React.FC<Props> = (props: Props) => {
  const { height, width, bgColor } = props;

  return <StyleHr height={height} width={width} bgColor={bgColor} />;
};

export default Hr;
