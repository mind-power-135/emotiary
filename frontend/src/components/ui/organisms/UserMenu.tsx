import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import {
  IoBookmarksOutline,
  IoChatbubbleEllipsesOutline,
  IoClipboardOutline,
  IoHeartOutline,
  IoLogOutOutline,
  IoMegaphoneOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 3rem;
  
  width: 30rem;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  
  background: #E7ECFF;
  border: 1.5px solid #000000;
  border-radius: 2rem 0 0 2rem;
`;

const MenuBox = styled.div`
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 0 0;
  gap: 1.5rem;
  
  width: 100%;
  border-top: 1rem solid #FFFFFF;
`;

const MenuTitle = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  
  display: flex;
  align-items: flex-start;
  
  padding: 0 3rem;
  box-shadow: inset 0 -2rem 0 0 white;
  line-height: 4rem;
`;

const MenuRow = styled.a`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 3rem;
  gap: 1.5rem;
  cursor: pointer;
`;

const UserMenu = () => {
  let isManager = true;

  return (
    <MenuWrap>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem'
      }}>
        <div>
          {/* TODO: 세션에서 사용자 정보 매핑 */}
          <b style={{
            fontWeight: "bold",
            fontSize: '2.4rem',
          }}>User Name</b>
          <p style={{
            marginTop: '1rem',
            fontWeight: 'normal',
            color: "#999999"
          }}>Email</p>
        </div>
        <Button theme={'default'}>마이페이지</Button>
      </div>
      <MenuBox>
        <MenuTitle>내 활동</MenuTitle>
        <MenuRow>
          <Icon setIconClickEvent={() => {}}><IoClipboardOutline /></Icon>
          <div>내가 쓴 글 보기</div>
        </MenuRow>
        <MenuRow>
          <Icon setIconClickEvent={() => {}}><IoBookmarksOutline /></Icon>
          <div>북마크 한 글 보기</div>
        </MenuRow>
        <MenuRow>
          <Icon setIconClickEvent={() => {}}><IoHeartOutline /></Icon>
          <div>좋아요 목록</div>
        </MenuRow>
      </MenuBox>
      <MenuBox>
        <MenuTitle>서비스</MenuTitle>
        <MenuRow>
          <Icon setIconClickEvent={() => {}}><IoMegaphoneOutline /></Icon>
          <div>공지사항</div>
        </MenuRow>
        <MenuRow>
          <Icon setIconClickEvent={() => {}}><IoChatbubbleEllipsesOutline /></Icon>
          <div>1:1 문의</div>
        </MenuRow>
        <MenuRow>
          <Icon setIconClickEvent={() => {}}><IoLogOutOutline /></Icon>
          <div>로그아웃</div>
        </MenuRow>
      </MenuBox>
      {
        isManager
          ? <MenuBox>
            <MenuTitle>관리자</MenuTitle>
            <MenuRow>
              <Icon setIconClickEvent={() => {}}><IoPeopleOutline /></Icon>
              <div>사용자 관리</div>
            </MenuRow>
          </MenuBox>
          : null
      }
    </MenuWrap>
  );
};

export default UserMenu;