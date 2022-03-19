import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <span className="logo-icon">
          <i className="fab fa-instagram" />
        </span>
        <span>Westagram</span>
      </div>

      <form className="nav-form">
        <input className="nav-input" type="text" placeholder="검색" />
        <i className="fas fa-search" />
        <ul className="users search-info" />
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
        <li className="profile-icon">
          <img
            alt="profile-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
          <ul className="profile-menu">
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
