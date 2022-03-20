import React, { useState, useRef } from 'react';
import FeedTop from './FeedTop';
import Comment from './Comment';

const Feed = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const commentForm = useRef();

  // comment handling - set comments in an array when they are submitted
  const submitComment = e => {
    e.preventDefault();
    setComments(cur => [comment, ...cur]);

    //clear comment input
    setComment('');
  };

  // comment handling - set comment
  const handleComment = e => {
    setComment(cur => (cur = e.target.value));
  };

  //activate the comment-btn when it's input
  const activateCommentBtn = () => {
    commentForm.current.classList.add('activate');
    if (comment.length === 0) commentForm.current.classList.remove('activate');
  };

  // comment handling - delete comment
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
          <ul className="comments feed-description user-info">
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
          onKeyUp={activateCommentBtn}
        >
          <input
            value={comment}
            type="text"
            className="comment-input"
            placeholder="댓글 달기..."
            onChange={handleComment}
          />
          <button className="comment-btn">게시</button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
