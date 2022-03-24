import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('../boni/main');
  };
  // m1
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  // m2
  const [isActive, setIsActive] = useState(false);
  const isPassedLogin = () => {
    return email.includes('@') && password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="logo-text">Instagram</div>
        <input
          onChange={handleIdInput}
          onKeyUp={isPassedLogin}
          className="input-login"
          type="text"
          placeholder="아이디를 입력해주세요."
        />
        <input
          onChange={handlePasswordInput}
          onKeyUp={isPassedLogin}
          className="input-login"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button
          className={isActive ? 'button-login' : 'disabled button-login'}
          onClick={goToMain}
        >
          로그인
        </button>
        <Link className="anchor-pw-find" to="/#;">
          비멀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
}

export default Login;
