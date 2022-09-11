import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  flexDirection?: string;
}

const StyleForm = styled.form<{ flexDirection?: string }>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'column'};
  width: fit-content;
  gap: 5rem;
`;

const Button: React.FC<Props> = (props: Props) => {
  const { children, flexDirection } = props;

  return <StyleForm flexDirection={flexDirection}>{children}</StyleForm>;
};

export default Button;
