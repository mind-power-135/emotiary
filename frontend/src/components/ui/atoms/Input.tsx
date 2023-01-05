import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  width: 38rem; height 2rem;
  color: #666666;
  border: 1px solid #6D6A6A;
  border-radius: 10px;
`;

interface Props {
  type: string;
  name: string;
  placeholder?: string;
}

const Input: React.FC<Props> = (props) => {
  const { type, name, placeholder } = props;

  return (
    <InputBox type={type} name={name} placeholder={placeholder} />
  );
};

export default Input;