import React from 'react';
import styles from './Main.scss';
const Main = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="listlogo">westagram</li>
          <li className="listInput">
            <input type="text" placeholder="검색" />
          </li>
          <div className="listImg">
            <li>
              <img src="/images/Noh/icons8-instagram-50.png" alt="하트" />
            </li>
            <li>
              <img src="/images/Noh/검색.png" alt="검색" />
            </li>
            <li>
              <img src="/images/Noh/user-icon.png" alt="하트" />
            </li>
          </div>
        </ul>
      </nav>
      <div className="center">
        <main>
          <div className="header">
            <img src="/images/Noh/img1.webp" />
            <p>noh__noh_noh</p>
          </div>
          <div className="feed">
            <img src="/images/Noh/couple-1.webp" alt="" className="picture" />
            <div>
              <ul className="feed_icon">
                <div className="feed_icon_one">
                  <li>
                    <img src="/images/Noh/icons8-heart-64.png" alt="하트" />
                  </li>
                  <li>
                    <img src="/images/Noh/icons8-comment-24.png" alt="댓글" />
                  </li>
                  <li>
                    <img src="/images/Noh/plane.png" alt="비행기" />
                  </li>
                </div>
                <div>
                  <li>
                    <img src="/images/Noh/공유.png" alt="공유" />
                  </li>
                </div>
              </ul>
            </div>
            <div className="commentBox">
              <div className="commentBox_one">
                <div>abc님 외 5000만명이 좋아합니다.</div>
                <p>부우우우우우우우우우럽</p>
                <p>3시간 전</p>
                <br />
              </div>
              <div className="input">
                <input
                  type="text"
                  className="inputText"
                  placeholder="댓글달기"
                />
                <button className="inputButton">게시</button>
              </div>
            </div>
            <article />
          </div>
        </main>
        <aside>
          <div className="side">
            <div className="change">
              <img src="/images/Noh/img6.webp" alt="" className="circle1" />
              <span>wecode_bootcamp</span>
            </div>
          </div>
          <div className="recommend">
            <span>회원님을 위한 추천</span>
            <a href="">모두보기</a>
          </div>
          <div className="bottom">
            <img src="/images/Noh/img1.webp" alt="" className="circle" />
            <div className="idWrap">
              <span className="id">eun_hinn</span>
              <span className="id2">mj_thewildboar님 외 1명이 팔로우</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="bottom">
            <img src="/images/Noh/img2.webp" alt="" className="circle" />
            <div className="idWrap">
              <span className="id">khjo_91</span>
              <span className="id2">brent_Kim_님이 팔로우합니다</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="bottom">
            <img src="/images/Noh/img3.webp" alt="" className="circle" />
            <div className="idWrap">
              <span className="id">elephant5288</span>
              <span className="id2">no_ans_cs님이 팔로우 합니다.</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="bottom">
            <img src="/images/Noh/img4.webp" alt="" className="circle" />
            <div className="idWrap">
              <span className="id">attyhelory</span>
              <span className="id2">giv_meee님 외 1명이 팔로우 합니다.</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="authorization">
            <p>
              instagram 정보·지원·홍보 센터·API·
              <br />
              채용정보·개인정보처리방침·약관·
              <br />
              디렉터리·프로필·해시태크·언어
              <br />
              2019 INSTAGRAM
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Main;
