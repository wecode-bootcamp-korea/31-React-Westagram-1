import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
//import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [inputValues, setinputValues] = useState({
    id: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setinputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleEnterInput = e => {
    if (e.key === 'Enter') {
      navigate('Noh/Main');
    }
  };

  const isValid =
    inputValues.id.includes('@') && inputValues.password.length >= 5
      ? true
      : false;

  // const goToMain = Navigate('Noh/Main')

  return (
    <div className="login">
      <h1 className="header_Login">westagram</h1>
      <main className="mainLoginBox">
        <div className="loginBox">
          <input
            onChange={handleInput}
            name="id"
            className="id"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            onChange={handleInput}
            name="password"
            className="passWord"
            type="password"
            placeholder="비밀번호를 입려하세요"
          />
          <button
            className={isValid ? 'activebtn' : 'unactivebtn'}
            disabled={!isValid}
            onKeyPress={handleEnterInput}
          >
            로그인
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;

// onClick={goToMain
