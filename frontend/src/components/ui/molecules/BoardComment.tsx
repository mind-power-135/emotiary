import React from "react";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { IoEllipsisVerticalSharp, IoCloseSharp } from 'react-icons/io5';
import { BsHeart, BsBookmark} from "react-icons/bs"; 
import internal from "stream";
import CommentInput from "../molecules/CommentInput";

const CommentDiv = styled.div`
  position: relative;
  width: 700px;
  height: auto;
  padding-bottom: 4rem;
`;

const CommentNameBar = styled.div`
display: flex;
font-size: 16px;
gap: 1rem;
text-align: center;
align-items: center;
flex-direction: row;
`;

const CommentMenu = styled.div`
text-align: center;
align-items: center;
display: flex;
`;

const CommentBottom = styled.div`
display: flex;
gap: 1rem;
text-align: center;
align-items: center;
flex-direction: row;
`;

const CommentLike = styled.div`
display: flex;
`;

const Comment = styled.div`
display: flex;
padding-top: 1rem;
padding-bottom: 1rem;
`;

const ReComment = styled.div`
display: flex;
`;

const ComSmall = styled.span`
font-size: 14px;
color: #6C757D;
`;


interface Props {
    commentname: string;
    commenttime: string;
    comment: string;
    children: React.ReactNode;
}

const BoardComment: React.FC<Props> = (props) => {

    const { children, commentname, commenttime, comment } = props;
    //유효성 검사
    const [isvalid, setisvalid] = useState(false);

    return (
    <React.Fragment>
        <CommentDiv>
            <CommentNameBar>
                친구{commentname}<ComSmall>{commenttime}</ComSmall><CommentMenu><IoEllipsisVerticalSharp /></CommentMenu>
            </CommentNameBar>
            <Comment>{comment}</Comment>
            <CommentBottom>
            <CommentLike><BsHeart /></CommentLike><ReComment><ComSmall>답글달기</ComSmall></ReComment>
            </CommentBottom>
        </CommentDiv>
        <CommentInput></CommentInput>
    </React.Fragment>
    
    )
}; 

export default BoardComment;

BoardComment.defaultProps = {
    commentname: '1',
    commenttime: '3분 전',
    comment:'그니까 나라도 짜증날듯 ㅜ ㅋ'
  }
