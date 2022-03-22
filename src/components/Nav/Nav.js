import React, { useRef, useState, useEffect } from 'react';
import './Nav.scss';

const Nav = () => {
  const [state, setState] = useState({
    users: [],
    filteredUsers: [],
    term: '',
  });
  const { users, filteredUsers, term } = state;
  const profileMenu = useRef();
  useEffect(() => {
    fetch('http://localhost:3000/data/usersData.json')
      .then(res => res.json())
      .then(data => setState({ ...state, users: data }));
  }, []);

  const handleState = e => {
    const { value, name } = e.target;
    // filtered : filtered array - search user's id
    const filtered = users.filter(user => user.id.includes(value));
    setState({
      ...state,
      [name]: value,
      filteredUsers: value === '' ? [] : filtered,
    });
  };

  const showProfileIcon = () => {
    profileMenu.current.classList.toggle('open');
  };

  return (
    <div className="Nav">
      <div className="logo">
        <span className="logo-icon">
          <i className="fab fa-instagram" />
        </span>
        <span>Westagram</span>
      </div>

      <form className="nav-form">
        <input
          name="term"
          value={term}
          className="nav-input"
          type="text"
          placeholder="검색"
          onChange={handleState}
        />
        <i className="fas fa-search" />
        <ul className="users search-info">
          {filteredUsers.map((user, i) => {
            const { img, id, name } = user;
            return (
              <li key={i} className="user">
                <img className="profile" src={img} alt="profile" />
                <div className="user-info">
                  <strong>{id}</strong>
                  <p>{name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </form>

      <ul className="menu-container">
        <li>
          <img
            alt="explore-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
        </li>
        <li>
          <img
            alt="heart-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
        </li>
        <li className="profile-icon" onClick={showProfileIcon}>
          <img
            alt="profile-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
          <ul ref={profileMenu} className="profile-menu">
            <span className="triangle" />
            <li>
              <i className="fas fa-user-circle" /> 프로필
            </li>
            <li>
              <i className="far fa-bookmark" /> 저장됨
            </li>
            <li>
              <i className="fas fa-cog" /> 설정
            </li>
            <li id="logout-btn">로그아웃</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
