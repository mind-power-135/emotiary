import React from "react";
import styled from "styled-components";

const PntDiv = styled.div`
  position: relative;
  display: inline-block;
`;
const InputBox = styled.input`
  width: 15rem; height 2rem;
  color: #666666;
  padding-left: 3rem;
`;

const Icon = styled.i`
  position: absolute;
  top: 50%; left: 0.5rem;
  width: 2rem; height: 2rem;
  transform: translateY(-50%);
`

interface Props {
    type: string;
    name: string;
    placeholder: string;
    children: React.ReactNode;
}

const Input: React.FC<Props> = (props) => {
    const {type, name, placeholder, children} = props;

    return (
        <PntDiv>
            <InputBox type={type} name={name} placeholder={placeholder}/>
            <Icon>{children}</Icon>
        </PntDiv>
    );
};

export default Input;