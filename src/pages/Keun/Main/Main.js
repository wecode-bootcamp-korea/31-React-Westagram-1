import React, { useState } from 'react';
import './Main.scss';
import Comment from '../../../components/Keun/Comment';
import OtherStory from './other-story';
import { INFO_LIST } from './other-storyData';
import RocoStory from './reco-story';
import { REFO_LIST } from './reco-storyData';
import Reco from './reco-story';

const Main = () => {
  let [comment, setComment] = useState(['']);

  const handleCommentInput = e => {
    setComment(e.target.value);
  };

  let [commentArray, setCommentArray] = useState(['']);
  const handleCommentSubmit = e => {
    e.preventDefault();
    setCommentArray(commentValue => {
      return [...commentValue, comment];
    });
    setComment('');
  };

  return (
    <div className="main">
      <main className="main-wrap">
        <div className="feeds">
          <article className="feedscontent">
            <div className="feedscontent__profile">
              <div className="feedscontent__topbar">
                <img
                  alt="myprofile-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
                <span>그니당</span>
              </div>
              <div className="feedscontent__icon">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>
            <div className="feedscontent__img">
              <img
                alt="feed-picture"
                src="https://avatars.githubusercontent.com/u/56650238?v=4"
              />
            </div>

            <div className="feedscontent__status-bar">
              <div className="feedscontent__right">
                <img alt="feedscontent-icon" src="/images/Keun/compass.png" />
                <img alt="feedscontent-icon" src="/images/Keun/heart.png" />
                <img alt="feedscontent-icon" src="/images/Keun/profile.png" />
              </div>
              <div className="feedscontent__left">
                <img alt="feedscontent-icon" src="/images/Keun/profile.png" />
              </div>
            </div>

            <div className="feedscontent__like">
              <div className="feedscontent__like-text feedscontent__like-text--flex">
                <img
                  alt="feedscontent-avatar"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
                <span>그니당</span>님 <span>외 10명</span>이 좋아합니다.
              </div>
              <div className="feedscontent__like-text">
                <ul className="feedscontent__comment">
                  {commentArray.map((input, i) => {
                    return <Comment input={input} key={i} />;
                  })}
                </ul>
              </div>
            </div>
            <form className="feedscomment" onSubmit={handleCommentSubmit}>
              <input
                className="feedscomment__input"
                type="text"
                placeholder="댓글 달기..."
                maxLength="50"
                value={comment}
                onChange={handleCommentInput}
              />
              <button className="feedscomment__btn">게시</button>
            </form>
          </article>
        </div>
        <main className="main-right">
          <div className="main-right__mystory">
            <div className="main-right__img main-right__img--xl">
              <img
                alt="mystory-picture"
                src="https://avatars.githubusercontent.com/u/56650238?v=4"
              />
            </div>
            <div className="main-right__text">
              <h3>wecode_bootcamp</h3>
              <h3>WeCode | 위코드</h3>
            </div>
          </div>
          <div className="main-right__allstory">
            <div className="main-right__title">
              <h3>스토리</h3>
              <h3>모두 보기</h3>
            </div>

            {INFO_LIST.map(info => {
              return (
                <OtherStory
                  key={info.id}
                  infoName={info.name}
                  infoTime={info.time}
                />
              );
            })}
          </div>

          <div className="main-right__recommend">
            <div className="main-right__title">
              <h3>회원님을 위한 추천</h3>
              <h3>모두 보기</h3>
            </div>
            {REFO_LIST.map(reco => {
              return (
                <RocoStory
                  key={reco.id}
                  recoName={reco.name}
                  recoFri={reco.fri}
                />
              );
            })}
          </div>
        </main>
      </main>
    </div>
  );
};

export default Main;
