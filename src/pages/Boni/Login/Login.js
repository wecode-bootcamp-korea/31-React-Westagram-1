import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/boni/main');
  };
  // FIXME: 상대경로 => 내 위치에 상대적, 절대경로 prefer

  // m1
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // FIXME: state 하나로 합치기, handler 합치기
  // 관심사에 따라서 state 범위 정하기

  const handleIdInput = event => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  // m2
  // const [isActive, setIsActive] = useState(false);


  const isActive = email.includes('@') && password.length > 4;
  // valid (email, password)
  // email, password => state
  
  // 1. 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.
  // 2. 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.
  // 3. 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 state가 아닙니다.
  //
  // state change => re-render => UI => component function call => 
  //

  // FIXME: 삼항연산자 사용 안해도 되는 경우

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
