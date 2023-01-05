import React from 'react';
import styled from 'styled-components';

/**
 * 알림 리스트
 * ex> <Notification>{children}</Notification>
 * */

interface Props {
  children?: React.ReactNode;
}

const NotificationWrap = styled.div`
  position: fixed;
  top: 5rem;
  right: 5rem;
  width: 34rem;
  height: 55rem;

  &::before {
    content: '▲';
    position: absolute;
    top: 0;
    right: 5rem;
    transform: translate(0, -90%);
    z-index: 10;
    font-size: 5rem;
    color: #e8edff;
  }
`;

const NoHeader = styled.div`
  background: #e8edff;
  font-weight: 700;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 1rem 1rem 0 0;
`;

const Contents = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: calc(100% - 5rem);
  overflow-Y: scroll;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 0 1rem 1rem;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Notification: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const li = children ? children : "여기에 알림이 표시됩니다.";

  return (
    <NotificationWrap>
      <NoHeader>알림</NoHeader>
      <Contents>
        {li}
      </Contents>
    </NotificationWrap>
  );
};

export default Notification;
