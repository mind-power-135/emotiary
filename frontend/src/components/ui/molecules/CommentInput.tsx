import React from "react";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import internal from "stream";
import { IoSend } from 'react-icons/io5';

const InputDiv = styled.div`
  display: flex;
  width: 700px;
  border-radius: 10px;
  height: fit-content;
  background-color: #F8F8F8;
  flex-direction: row;
  align-items: center;
`;

const CoInputBox = styled.input`
  border:none;
  outline: none;
  width: fit-content;
  height: 4rem;
  padding-left: 3rem;
  background-color: #F8F8F8;
  border-radius: 10px;
  color: #6C757D;
`;

const InputButton = styled.div`
display: flex;
`;

interface Props {
    type: string;
    name: string;
    placeholder?: string;
    children: React.ReactNode;
  }

const BoardComment: React.FC<Props> = props => {

  const { type, name, placeholder, children, bgColor } = props;

    return (
    <React.Fragment>
        <InputDiv>
        <CoInputBox type="text" name={'id'} placeholder={'내 생각은...'}/>
          <InputButton><IoSend/></InputButton>
        </InputDiv>
    </React.Fragment>
    
    )
}; 

export default BoardComment;
