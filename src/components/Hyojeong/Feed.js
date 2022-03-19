import React, { useState, useRef } from 'react';
import Comment from './Comment';

const Feed = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const commentForm = useRef();

  const submitComment = e => {
    e.preventDefault();
    setComments(cur => [comment, ...cur]);

    //clear input
    setComment('');
  };

  //activate comment-btn when it's input
  const activateCommentBtn = e => {
    setComment(cur => (cur = e.target.value));
    commentForm.current.classList.add('activate');
    if (e.target.value === '') commentForm.current.classList.remove('activate');
  };

  //paint heart btn or bookmark btn in the article-bar
  const paintBtn = e => {
    e.target.classList.toggle('fas');
  };

  return (
    <div className="Feed">
      <div className="feed-bar">
        <div className="profile-box">
          <img
            alt="profile"
            className="profile"
            src="https://images.unsplash.com/photo-1617294255539-e6e4382ce3c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBzZWxmaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          />
          <strong className="profile-id">canon_mj</strong>
        </div>

        <i className="fas fa-ellipsis-h" />
      </div>
      <div className="feed-photo">
        <img alt="feed" src="/images/Hyojeong/feed.jpg" />
      </div>
      <div className="feed-btns">
        <button className="feed-heart-btn" onClick={paintBtn}>
          <i className="far fa-heart" />
        </button>
        <button>
          <i className="far fa-comment" />
        </button>
        <button>
          <i className="fas fa-external-link-alt" />
        </button>
        <button className="absolute" onClick={paintBtn}>
          <i className="far fa-bookmark" />
        </button>
      </div>

      <div className="user-info feed-description">
        <strong className="profile-id">canon_mj</strong> 날 좋은 하루💙
        <br />
        <div className="scroll">
          <ul id="comments" className="comments feed-description user-info">
            {comments.map((comment, i) => {
              return <Comment key={i} comment={comment} />;
            })}
          </ul>
        </div>
        <form
          ref={commentForm}
          className="comment-form"
          onSubmit={submitComment}
        >
          <input
            value={comment}
            type="text"
            className="comment-input"
            placeholder="댓글 달기..."
            onChange={activateCommentBtn}
          />
          <button className="comment-btn">게시</button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
