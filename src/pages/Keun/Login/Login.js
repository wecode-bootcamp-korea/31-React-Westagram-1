import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  //Main페이지 이동
  const gotoMain = () => {
    navigate('../Keun/Main');
  };

  //로그인 input 값 받기 -> 객체로 구현
  let [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });

  const handleIdInput = e => {
    setInputs({ ...inputs, id: e.target.value });
  };

  const handlePwInput = e => {
    setInputs({ ...inputs, pw: e.target.value });
  };

  console.log(inputs);

  return (
    <div className="wrap">
      <div className="logo">westagram</div>
      <form className="login">
        <input
          className="login__email"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          className="login__pw"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />
        <button className="login__btn" type="button" onClick={gotoMain}>
          로그인
        </button>
      </form>

      <footer className="footer">
        <a>비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
};

export default Login;
