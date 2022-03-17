import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate('../Keun/Main');
  };

  return (
    <div className="wrap">
      <div className="logo">westagram</div>
      <form className="login">
        <input
          className="login__email"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="login__pw" type="password" placeholder="비밀번호" />
        <button className="login__btn" type="button" onClick={gotoMain}>
          로그인
        </button>
      </form>

      <footer className="footer">
        <a onClick={gotoMain}>비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
};

export default Login;
