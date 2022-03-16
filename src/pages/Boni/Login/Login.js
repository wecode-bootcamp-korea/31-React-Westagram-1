import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('../boni/main');
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="logo-text">Instagram</div>
        <input
          className="input-login"
          type="text"
          placeholder="아이디를 입력해주세요."
        />
        <input
          className="input-login"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button className="button-login" onClick={goToMain}>
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
