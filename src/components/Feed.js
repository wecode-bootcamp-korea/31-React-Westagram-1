import React, { useState } from 'react';

const Feed = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const submitComment = e => {
    e.preventDefault();
    setComments(cur => [comment, ...cur]);

    //clear input
    setComment('');
  };

  const onChange = e => {
    setComment(e.target.value);
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
        <button className="feed-heart-btn">
          <i className="far fa-heart" />
        </button>
        <button>
          <i className="far fa-comment" />
        </button>
        <button>
          <i className="fas fa-external-link-alt" />
        </button>
        <button className="absolute">
          <i className="far fa-bookmark" />
        </button>
      </div>

      <div className="user-info feed-description">
        <strong className="profile-id">canon_mj</strong> 날 좋은 하루💙
        <br />
        <div className="scroll">
          <ul id="comments" className="comments feed-description user-info">
            {comments.map((comment, i) => {
              return (
                <li key={i} className="comment">
                  <strong>hyodduru</strong> {comment}
                  <button className="heart-btn">
                    <i className="far fa-heart" />
                  </button>
                  <button className="delete-btn">
                    <i className="fas fa-times" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <form className="comment-form" onSubmit={submitComment}>
          <input
            value={comment}
            type="text"
            className="comment-input"
            placeholder="댓글 달기..."
            onChange={onChange}
          />
          <button className="comment-btn">게시</button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
