import React from 'react';

const MainRight = () => {
  return (
    <div className="MainRight">
      <div className="user">
        <img
          alt="profile"
          className="profile big"
          src="/images/Hyojeong/profile2.JPG"
        />
        <div className="user-info">
          <strong id="user-id">hyodduru</strong>
          <p>김효정</p>
        </div>
      </div>

      <div className="sub-container">
        <div className="sub-bar">
          스토리
          <span>
            <strong>모두 보기</strong>
          </span>
        </div>
        <ul className="users">
          <li className="user">
            <img
              alt="profile"
              className="profile"
              src="https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <div className="user-info">
              <strong>ji_123Andrew</strong>
              <p>Sally</p>
            </div>
          </li>
          <li className="user">
            <img
              alt="profile"
              className="profile"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <div className="user-info">
              <strong>happy_day</strong>
              <p>Andrew</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="sub-container">
        <div className="sub-bar">
          회원님을 위한 추천{' '}
          <span>
            <strong>모두 보기</strong>
          </span>
        </div>
        <ul className="users">
          <li className="user">
            <img
              alt="profile"
              className="profile"
              src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
            />
            <div className="user-info">
              <strong>gldis1232123</strong>
              <p>ddgoeity님 외 2명이 ....</p>
              <span className="follow-link">팔로우</span>
            </div>
          </li>
          <li className="user">
            <img
              alt="profile"
              className="profile"
              src="https://images.unsplash.com/photo-1627208753013-8954b7089657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtvcmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
            />
            <div className="user-info">
              <strong>h2dong</strong>
              <p>hi_12345님 외 4명이 ....</p>
              <span className="follow-link" href="#">
                팔로우
              </span>
            </div>
          </li>
        </ul>
      </div>

      <p className="instagram-info">
        Instagram 정보 · 지원 · 홍보센터 · API · 채용 정보 · 개인정보처리방침 ·
        약관 · 디렉터리 · 프로필 · 해시태그 · 언어
        <br />
        <br />ⓒ 2019 INSTAGRAM
      </p>
    </div>
  );
};

export default MainRight;
