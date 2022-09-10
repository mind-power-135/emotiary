import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 5rem;
`;

const Button: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return <StyleForm>{children}</StyleForm>;
};

export default Button;
