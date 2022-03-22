import './Login.scss';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const { id, password } = loginInfo;
  const loginForm = useRef();

  // Login Handling - set user's id & password
  const handleLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // Login Handling - go to the main page when logged in
  const submitLoginInfo = e => {
    e.preventDefault();
    if (id.length === 0 || password.length === 0) return;

    checkValidity();

    if (isValid) {
      if (window.confirm('로그인 하시겠습니까?')) {
        navigate('../Hyojeong/main', { replace: false });
      }
    }
  };

  //id & pass validation
  const checkValidity = () => {
    const korCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    const spcCheck = /[~!#$%^&*();_+|<>?:{}]/g;
    if (id === null || id === '') alert('아이디 입력은 필수입니다.');
    else if (spcCheck.test(id)) alert('적합한 아이디 형식이 아닙니다.');
    else if (korCheck.test(id)) alert('영문으로 입력해주세요.');
    else if (id.length > 0 && id.length < 3) alert('아이디는 3자 이상입니다.');
    else if (id.length > 15) alert('15자 이내로 입력해주세요.');
    else if (id.search(/\s/) !== -1)
      alert('아이디는 빈 칸을 포함 할 수 없습니다.');
    else if (password === null || password === '')
      alert('비밀번호 입력은 필수입니다.');
    else if (password.length > 0 && password.length < 5)
      alert('비밀번호는 5자 이상입니다.');
    else if (password.length > 20) alert('비밀번호는 20자 미만입니다.');
    else setIsValid(true);
  };

  return (
    <div className="Login">
      <h1>Westagram</h1>
      <form ref={loginForm} className="login-form" onSubmit={submitLoginInfo}>
        <input
          name="id"
          value={id}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleLoginInfo}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호"
          onChange={handleLoginInfo}
        />
        <button
          className={
            id.length < 3 || password.length < 5
              ? 'login-btn'
              : 'login-btn active'
          }
        >
          로그인
        </button>
      </form>
      <span>비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
