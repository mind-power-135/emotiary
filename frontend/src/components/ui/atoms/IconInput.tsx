import React from 'react';
import styled from 'styled-components';

interface Props {
  type: string;
  name: string;
  placeholder?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const PntDiv = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
`;

export const InputBox = styled.input`
  width: 38rem;
  height: 4rem;
  color: #666666;
  padding-left: 3rem;
  background-color: ${({ color }) => (color ? `#` + color : 'white')};
  border: 1px solid #6d6a6a;
  border-radius: 10px;
`;

const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  width: 2rem;
  height: 2rem;
  transform: translateY(-50%);
`;

const IconInput: React.FC<Props> = props => {
  const { type, name, placeholder, children, bgColor } = props;

  return (
    <PntDiv>
      <InputBox
        type={type}
        name={name}
        placeholder={placeholder}
        color={bgColor}
      />
      <Icon>{children}</Icon>
    </PntDiv>
  );
};

export default IconInput;
