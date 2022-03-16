import './Login.scss';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [isValid, setValidity] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const loginForm = useRef();

  // activate login-btn when input id & password
  const activateLoginBtn = () => {
    loginInfo.id.length <= 3 || loginInfo.password.length <= 5
      ? loginForm.current.classList.remove('active')
      : loginForm.current.classList.add('active');
  };

  // Login Handling - set user's id & password
  const handleLoginInfo = e => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  // Login Handling - go to the main page when logged in
  const submitLoginInfo = e => {
    e.preventDefault();
    if (loginInfo.id.length === 0 || loginInfo.password.length === 0) return;

    checkValidity();
    if (isValid) {
      window.confirm('로그인 하시겠습니까?');
      navigate('../Hyojeong/main', { replace: false });
    }
  };

  //id & pass validation
  const checkValidity = () => {
    const korCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    const spcCheck = /[~!#$%^&*();_+|<>?:{}]/g;
    if (loginInfo.id === null || loginInfo.id === '')
      alert('아이디 입력은 필수입니다.');
    else if (spcCheck.test(loginInfo.id))
      alert('적합한 아이디 형식이 아닙니다.');
    else if (korCheck.test(loginInfo.id)) alert('영문으로 입력해주세요.');
    else if (loginInfo.id.length > 0 && loginInfo.id.length < 3)
      alert('아이디는 3자 이상입니다.');
    else if (loginInfo.id.length > 15) alert('15자 이내로 입력해주세요.');
    else if (loginInfo.id.search(/\s/) !== -1)
      alert('아이디는 빈 칸을 포함 할 수 없습니다.');
    else if (loginInfo.password === null || loginInfo.password === '')
      alert('비밀번호 입력은 필수입니다.');
    else if (loginInfo.password.length > 0 && loginInfo.password.length < 5)
      alert('비밀번호는 5자 이상입니다.');
    else if (loginInfo.password.length > 20)
      alert('비밀번호는 20자 미만입니다.');
    else setValidity(true);
  };

  return (
    <div className="Login">
      <h1>Westagram</h1>
      <form ref={loginForm} className="login-form" onChange={activateLoginBtn}>
        <input
          name="id"
          value={loginInfo.id}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleLoginInfo}
        />
        <input
          name="password"
          value={loginInfo.password}
          type="password"
          placeholder="비밀번호"
          onChange={handleLoginInfo}
        />
        <button className="login-btn" onClick={submitLoginInfo}>
          로그인
        </button>
      </form>
      <span>비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
