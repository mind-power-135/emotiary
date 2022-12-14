import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  color?: string;
  theme: ThemeType;
  setButtonOnClickEvent?: (e: React.MouseEvent<HTMLElement>) => void;
}

type ThemeType = 'default' | 'dark';

const StyleButton = styled.button<{ theme: string }>`
  padding: 1rem 2rem;
  height: 4rem;
  color: ${({ theme }) => (theme == 'default' ? '#999999' : '#ffffff')};
  background-color: ${({ theme }) =>
    theme == 'default' ? '#ffffff' : '#999999'};
  text-align: center;
  border: 1px solid #999999;
  border-radius: 10px;
  cursor: pointer;
`;

const Button: React.FC<Props> = (props: Props) => {
  const { children, theme, setButtonOnClickEvent } = props;

  return (
    <StyleButton theme={theme} onClick={setButtonOnClickEvent}>
      {children}
    </StyleButton>
  );
};

export default Button;
