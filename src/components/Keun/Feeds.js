import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function Feeds({ userName }) {
  let [comment, setComment] = useState('');

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

  {
    console.log(userName);
  }
  return (
    <article className="feedscontent">
      <div className="feedscontent__profile">
        <div className="feedscontent__topbar">
          <img
            alt="myprofile-picture"
            src="https://avatars.githubusercontent.com/u/56650238?v=4"
          />
          <span>{userName}</span>
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
            {commentArray.map((inputs, i) => {
              return <Comment inputs={inputs} key={i} />;
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
  );
}

export default Feeds;
