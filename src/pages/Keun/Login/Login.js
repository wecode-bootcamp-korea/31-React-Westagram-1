import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  //로그인 input 값 받기 -> 객체로 구현
  let [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });
  const handleInputs = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // 유효성 검토
  const checkValid = inputs.id.includes('@') && inputs.pw.length >= 5;

  // 로그인 인증 인가 후 fetch
  const gotoMain = () => {
    fetch('http://10.58.2.0:8000/u/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.id,
        password: inputs.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과: ', result);
      });
  };

  return (
    <div className="login">
      <div className="logo">westagram</div>
      <form className="login__form">
        <input
          className="login__email"
          name="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInputs}
          value={inputs.id}
        />
        <input
          className="login__pw"
          name="pw"
          type="password"
          placeholder="비밀번호"
          onChange={handleInputs}
          value={inputs.pw}
        />

        <button
          className={checkValid ? 'active' : null}
          type="button"
          onClick={gotoMain}
        >
          로그인
        </button>
      </form>

      <footer className="footer">
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </footer>
    </div>
  );
};

export default Login;
