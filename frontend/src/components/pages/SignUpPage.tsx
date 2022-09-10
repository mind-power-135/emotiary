import React from 'react';
import IconInput from '../ui/atoms/IconInput';
import Button from '../ui/atoms/Button';
import Logo from '../ui/atoms/Logo';
import {
  IoCalendarClearOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
  IoSchoolOutline,
} from 'react-icons/io5';
import Form from '../ui/molecules/Form';

const SignUpPage: React.FC<any> = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          gap: '12rem',
          margin: '0 auto',
        }}
      >
        <Logo />
        <Form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '2rem',
            }}
          >
            <IconInput type={'text'} name={'id'} placeholder={'아이디'}>
              <IoPersonOutline />
            </IconInput>
            <IconInput
              type={'password'}
              name={'password'}
              placeholder={'비밀번호'}
            >
              <IoLockClosedOutline />
            </IconInput>
            <IconInput type={'email'} name={'email'} placeholder={'이메일'}>
              <IoMailOutline />
            </IconInput>
            <IconInput
              type={'date'}
              name={'birthDate'}
              placeholder={'생년/월/일'}
            >
              <IoCalendarClearOutline />
            </IconInput>
            <IconInput type={'text'} name={'school'} placeholder={'학교'}>
              <IoSchoolOutline />
            </IconInput>
            <IconInput type={'text'} name={'grade'} placeholder={'학년'}>
              <IoSchoolOutline />
            </IconInput>
            <IconInput type={'text'} name={'class'} placeholder={'반'}>
              <IoSchoolOutline />
            </IconInput>
          </div>
          <Button theme={'dark'}>등록</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
