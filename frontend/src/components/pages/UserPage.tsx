import React from 'react';
import styled from 'styled-components';
import Header from '../ui/organisms/Header';
import Hr from '../ui/atoms/Hr';
import { TbNotebook } from 'react-icons/tb';
import {
  BiCommentDetail,
  BiBookmarks,
  BiHeart,
  BiLogOut,
  BiBlock,
} from 'react-icons/bi';
import Form from '../ui/molecules/Form';
import Input from '../ui/atoms/Input';
import Icon from '../ui/atoms/Icon';

interface Props {
  date?: Date;
  children?: React.ReactNode;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 120vw;
  text-align: left;
`;

const Bundle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  width: 100%;
  /* text-align: left; */
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: left;
`;

const ClickMenu = styled.div``;

const UserPage: React.FC<Props> = (props: Props) => {
  const { date } = props;

  return (
    <Div>
      <Header />
      <H1>마이페이지</H1>
      <Hr height={0.2} />
      <Form>
        <Bundle>
          <label>이름</label>
          <Input type={'text'} name={'name'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>학교</label>
          <Input type={'text'} name={'school'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>학년</label>
          <Input type={'text'} name={'grade'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>반</label>
          <Input type={'text'} name={'class'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>전화번호</label>
          <Input type={'tel'} name={'tel'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>이메일</label>
          <Input type={'email'} name={'email'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>생년월일</label>
          <Input type={'date'} name={'date'} placeholder={'ㅇㅇㅇ'}></Input>
        </Bundle>

        <Bundle>
          <label>비밀번호</label>
          <Input
            type={'password'}
            name={'password'}
            placeholder={'ㅇㅇㅇ'}
          ></Input>
        </Bundle>
      </Form>
      <p>우리가 함께 한 지 벌써 {}일이에요!</p>

      <Hr height={0.1} bgColor={'#555555'} />
      <Bundle>
        <Icon setIconClickEvent={() => {}}>
          <TbNotebook />
        </Icon>
      </Bundle>

      <Bundle>
        <Icon setIconClickEvent={() => {}}>
          <BiCommentDetail />
        </Icon>
      </Bundle>

      <Bundle>
        <Icon setIconClickEvent={() => {}}>
          <BiBookmarks />
        </Icon>
      </Bundle>

      <Bundle>
        <Icon setIconClickEvent={() => {}}>
          <BiHeart />
        </Icon>
      </Bundle>

      <Hr height={0.1} bgColor={'#555555'} />

      <Bundle>
        <Icon setIconClickEvent={() => {}}>
          <BiLogOut />
        </Icon>
      </Bundle>

      <Bundle>
        <Icon setIconClickEvent={() => {}}>
          <BiBlock />
        </Icon>
      </Bundle>
    </Div>
  );
};

export default UserPage;
