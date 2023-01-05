import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {
  IoMegaphoneOutline,
  IoHeartOutline,
  IoClipboardOutline,
  IoBookmarksOutline,
} from 'react-icons/io5';

/**
 * 알림 리스트 아이템
 * ex> <NotificationItem category={'notice'} title={'타이틀'} contentType={'board'} isRead={false} time={'1분전'}/>
 * */

interface Props {
  category: Category;
  title: string;
  contentType: ContentType;
  isRead: boolean;
  time: string;
  setButtonOnClickEvent?: (e: React.MouseEvent<HTMLElement>) => void;
}

type Category = 'notice' | 'pstLike' | 'comment' | 'recomment' | 'bookmark' | 'cmtLike';
type ContentType = 'board' | 'email' | 'talk';

const categoryIcon = {
  'notice': <IoMegaphoneOutline />,
  'pstLike': <IoHeartOutline />,
  'comment': <IoClipboardOutline />,
  'recomment': <IoClipboardOutline />,
  'bookmark': <IoBookmarksOutline />,
  'cmtLike': <IoHeartOutline />,
};

const NotificationItemWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const Title = styled.div<{ isRead: boolean }>`
  font-weight: 700;
  color: ${({ isRead }) => (isRead ? '#999' : '#000')};
  text-overflow: ellipsis;
`;

const TimeStr = styled.div`
  text-align: start;
  margin-top: 1rem;
  color: #999;
  font-size: 0.9em;
`;

const NotificationItem: React.FC<Props> = (props: Props) => {
  const { category, title, contentType, isRead, time, setButtonOnClickEvent } = props;
  const IconName = categoryIcon[category];

  return (
    <NotificationItemWrap onClick={setButtonOnClickEvent}>
      <Icon>{IconName}</Icon>
      <div>
        <Title isRead={isRead}>{title}</Title>
        <TimeStr>{time}</TimeStr>
      </div>
    </NotificationItemWrap>
  );
};

export default NotificationItem;
