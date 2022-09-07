import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  color?: string;
  theme: ThemeType;
}

type ThemeType = 'default' | 'dark';

const StyleButton = styled.button<{ theme: string }>`
  padding: 1rem 2rem;
  height: 4rem;
  color: ${({ theme }) => (theme == 'default' ? '#999999' : '#ffffff')};
  background-color: ${({ theme }) =>
    theme == 'default' ? '#ffffff' : '#999999'};
  font-size: 1rem;
  text-align: center;
  border: 1px solid #999999;
  border-radius: 10px;
  cursor: pointer;
`;

const Button: React.FC<Props> = (props: Props) => {
  const { children, theme } = props;

  return <StyleButton theme={theme}>{children}</StyleButton>;
};

export default Button;
