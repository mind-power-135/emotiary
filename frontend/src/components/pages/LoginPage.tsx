import React from 'react';
import IconInput from '../ui/atoms/IconInput';
import Button from '../ui/atoms/Button';
import Logo from '../ui/atoms/Logo';
import B from '../ui/atoms/B';
import { IoPersonOutline, IoLockClosedOutline } from 'react-icons/io5';

const LoginPage: React.FC<any> = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        gap: '12rem',
        margin: '0 auto',
      }}>
        <Logo />
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          gap: '5rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '2rem',
          }}>
            <IconInput type={'text'} name={'id'} placeholder={'아이디'}><IoPersonOutline /></IconInput>
            <IconInput type={'password'} name={'password'} placeholder={'비밀번호'}><IoLockClosedOutline /></IconInput>
            <B>비밀번호를 잃어버렸나요?</B>
          </div>
          <Button theme={'dark'}>로그인</Button>
          <div>오늘 어떤 하루를 보냈는지 알리고 싶다면 <B>아이디 만들기</B></div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;