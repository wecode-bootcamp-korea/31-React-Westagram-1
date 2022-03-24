import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.scss';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const { id, password } = loginInfo;
  let isLoginInfoValid = id.length >= 3 && password.length >= 5;

  const navigate = useNavigate();

  // Login Handling - set user's id & password
  const handleLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo(cur => ({ ...cur, [name]: value }));
  };

  // Login Handling - go to the main page when logged in
  const submitLoginInfo = e => {
    e.preventDefault();
    if (id.length === 0 || password.length === 0) return;

    // get user's info
    fetch('http://10.58.2.11:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'fail') alert(`Error : ${result.message} 발생`);
        if (result.message === 'success' && result.access_token) {
          localStorage.setItem('wtw-token', result.access_token);

          if (window.confirm('로그인 하시겠습니까?')) {
            navigate('../Hyojeong/main', { replace: false });
          }
        }
      })
      .catch(() => alert('네트워크 오류입니다.'));
  };

  return (
    <div className="Login">
      <h1>Westagram</h1>
      <form className="login-form" onSubmit={submitLoginInfo}>
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
        <button className={isLoginInfoValid ? 'login-btn active' : 'login-btn'}>
          로그인
        </button>
      </form>
      <span>비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
