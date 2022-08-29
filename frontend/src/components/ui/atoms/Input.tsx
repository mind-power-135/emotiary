import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
  width: 15rem; height 2rem;
  color: #666666;
`;

interface Props {
    type: string;
    name: string;
    placeholder?: string;
    children?: React.ReactNode;
}

const Input: React.FC<Props> = (props) => {
    const {type, name, placeholder, children} = props;

    return (
        <InputBox type={type} name={name} placeholder={placeholder}/>
    );
};

export default Input;