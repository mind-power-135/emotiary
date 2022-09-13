import React from "react";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { IoEllipsisVerticalSharp, IoCloseSharp } from 'react-icons/io5';
import { BsHeart, BsBookmark} from "react-icons/bs"; 
import internal from "stream";
import BoardComment from "../molecules/BoardComment";

const PostEx = styled.div<{ color?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostDiv = styled.div<{ color?: string }>`
  position: fixed;
  background-color: white;
  width: 800px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  padding-inline: 5em 5em ; 
  padding-bottom: 5rem;
  text-align: start;
  align-items: center;
`;

const PostTopBar = styled.div`
display: flex;
align-items: center;
justify-content: end;
gap: 2rem;
padding-top: 5rem;
`;

const Today = styled.div`
display: inline-block;
font-size: 14px;
justify-content: left;
`;

const Menu = styled.button`
width: 3rem;
height: 3rem;
background-color: #ffffff;
border: 0px solid #ffffff;
`;

const Topclose = styled.button`
width: 3rem;
height: 3rem;
border-radius: 3px;
border: 0px solid #ffffff;
`

const PostTitle = styled.div`
margin: 0 auto;
width: 100%;
display: flex;
text-align: center;
justify-content: center;
font-size:32px; font-weight: Medium;
padding-top:3rem;
`

const PostSummary = styled.div`
padding-top:5rem;
display: flex;
line-height:180%;
`;

const PostImg = styled.div`
padding-top: 5rem;
padding-bottom: 5rem;
width: auto;
height: auto;
display: flex;
justify-content: center;
`;

const PostArticle = styled.div`
line-height:180%;
padding-bottom: 5rem;
`;

const PostTag = styled.div`
display: flex;
flex-direction: row-reverse;
font-weight: bold;
font-size: 20px;
`;

const BottomBar = styled.div`
line-height:180%;
padding-bottom: 2rem;
gap: 2rem;
flex-direction: row;
`;

const SmallSpan = styled.span`
color: #6D6D6D;
font-size: 14px;
`;

interface Props {
    CloseModal: any;
    today: string;
    posttitle: string;
    postsummary: string;
    children: React.ReactNode;
    postimg: string;
    posttag: string;
    postarticle: string;
    comment: string;
    like: string;
}

const PostModal: React.FC<Props> = (props) => {

    const { children,  today, posttitle, postsummary, postimg, postarticle, posttag, comment, like} = props;
    
    function CloseModal() {
        props.CloseModal();
      }

    return (
      <PostEx>
        <PostDiv onClick={(e) => e.stopPropagation()}>
            <PostTopBar>
            <Today>{today}</Today>
            <Menu><IoEllipsisVerticalSharp/></Menu>
            <Topclose id="modalCloseBtn" onClick={CloseModal}><IoCloseSharp/></Topclose>
            </PostTopBar>
            <PostTitle>{posttitle}</PostTitle>
            <PostSummary>{postsummary}</PostSummary>
            <PostImg>{<img src={postimg}/>}</PostImg>
            <PostArticle>{postarticle}</PostArticle>
            <PostTag>{posttag}</PostTag>
            <BottomBar>
                <Menu><BsHeart/></Menu>
                <Menu><BsBookmark/></Menu>
                 <SmallSpan>{comment} 댓글 {like} 좋아요</SmallSpan>
                 </BottomBar>
                 <BoardComment/>
        </PostDiv>
    </PostEx>
   
    )
}; 

export default PostModal;

PostModal.defaultProps = {
    today:'2022년 8월 14일',
    posttitle:'아 진짜 친구 열받음... 살려줘라... ',
    postsummary:'아 진짜 맨날 나보고 뭐라 그래 ㅜㅜ 어제도 짜증 다 받아줬더니 ㅜㅜ 배은망덕하다... 아오 짜증나죽겠어진짜~~~~  아 진짜 맨날 나보고 뭐라 그래 ㅜㅜ 어제도 짜증 다 받아줬더니 ㅜㅜ 배은망덕하다... 아오 짜증나죽겠어진짜~~~~ ',
    postimg:'https://i.imgur.com/PTMSj2E.jpg',
    postarticle:'아 진짜 맨날 나보고 뭐라 그래 ㅜㅜ 어제도 짜증 다 받아줬더니 ㅜㅜ 배은망덕하다... 아오 짜증나죽겠어진짜~~~~',
    posttag:'#분노 ',
    comment:'347',
    like:'347'

  }
