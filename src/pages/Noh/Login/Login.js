import React from 'react';
import styles from './Login.scss';
//import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  return (
    <div className="borderBox">
      <h1 className="header_Login">westagram</h1>
      <main className="loginbox">
        <div className="loginBox">
          <input
            className="id"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            className="passWord"
            type="password"
            placeholder="비밀번호를 입려하세요"
          />
          <a href="#">비밀번호를 잊으셨나요?</a>
          {/* <Link to='/main'>메인으로 이동</Link> */}
        </div>
      </main>
    </div>
  );
};

export default Login;
