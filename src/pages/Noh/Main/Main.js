import React, { useEffect, useState } from 'react';
import Feed from './Feed/Feed';
import './Main.scss';
const Main = () => {
  let [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentArr(data);
      });
  }, []);

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
          <div>
            {commentArr.map(function (data, i) {
              return <Feed key={i} feed={data} />;
            })}
          </div>
        </main>
        <aside>
          <div className="side">
            <div className="change">
              <img src="/images/Noh/img6.webp" alt="" className="circle1" />
              <span>wecode_bootcamp</span>
            </div>
          </div>
          <div>
            <div className="recommend">
              <span>회원님을 위한 추천</span>
              <a href="#none">모두보기</a>
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
