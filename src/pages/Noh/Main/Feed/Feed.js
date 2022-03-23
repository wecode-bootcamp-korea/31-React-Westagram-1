import React, { useState } from 'react';
import Comment from '../Comment';
import '../Main.scss';

const Feed = ({ feed }) => {
  let [comment, setComment] = useState({
    id: 1,
    userName: '노영완',
    content: '',
  });
  const {
    userProfileImg,
    userName,
    userLocation,
    content,
    thumbnail,
    commentList,
  } = feed;
  let [comments, setComments] = useState([...commentList]);

  const handleInput = event => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment({ ...comment, content: '' });
  };

  return (
    <div className="wrap">
      <div className="header">
        <img src={userProfileImg} alt="" />
        <p>noh__noh_noh</p>
      </div>
      <div className="feed">
        <img src={thumbnail} alt="" className="picture" />
        <div>
          <ul className="feed_icon">
            <div className="Article">
              <li>
                <img
                  className="feed_icon_two"
                  src="/images/Noh/공유.png"
                  alt="공유"
                />
              </li>
            </div>
          </ul>
        </div>

        <div className="commentBox">
          <div>
            <div>{userName}</div>
            <p>{userLocation}</p>
            <p>{content}</p>
            <br />
          </div>
          <div className="commentList">
            <h1>댓글</h1>
            <br />
            <ul>
              {comments.map(comment => {
                return <Comment key={comment.id} comment={comment} />;
              })}
            </ul>
          </div>
          <form className="input" onSubmit={handleInput}>
            <input
              value={comment.content}
              onChange={e => {
                setComment({ ...comment, content: e.target.value });
              }}
              type="text"
              className="inputText"
              placeholder="댓글달기"
            />
            <button type="submit" onClick={handleInput} className="inputButton">
              게시
            </button>
          </form>
        </div>
        <article />
      </div>
    </div>
  );
};

export default Feed;
