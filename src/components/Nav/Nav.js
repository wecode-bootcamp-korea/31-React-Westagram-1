import React, { useRef } from 'react';
import './Nav.scss';
// // Show nav - profile menu when clicking the profile icon
// document.addEventListener("click", (e) => {
//   const profileIcon = e.target.closest(".profile-icon");
//   if (profileIcon) profileMenu.classList.toggle("open");
//   else {
//     profileMenu.classList.remove("open");
//   }
// });

const Nav = () => {
  const profileMenu = useRef();

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
