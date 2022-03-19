import React, { useState, useRef } from 'react';
import FeedTop from './FeedTop';
import Comment from './Comment';

const Feed = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const commentForm = useRef();

  const submitComment = e => {
    e.preventDefault();
    setComments(cur => [comment, ...cur]);

    //disable the comment-btn when submitted
    commentForm.current.classList.remove('activate');

    //clear input
    setComment('');
  };

  //activate the comment-btn when it's input
  const activateCommentBtn = e => {
    setComment(cur => (cur = e.target.value));
    commentForm.current.classList.add('activate');
    if (e.target.value === '') commentForm.current.classList.remove('activate');
  };

  const onDelete = targetId => {
    setComments(comments => comments.filter((_, i) => targetId !== i));
  };

  return (
    <div className="Feed">
      <FeedTop />
      <div className="user-info feed-description">
        <strong className="profile-id">canon_mj</strong> 날 좋은 하루💙
        <br />
        <div className="scroll">
          <ul id="comments" className="comments feed-description user-info">
            {comments.map((comment, i) => {
              return (
                <Comment key={i} id={i} comment={comment} onDelete={onDelete} />
              );
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
