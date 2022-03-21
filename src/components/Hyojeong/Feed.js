import React, { useState, useRef } from 'react';
import FeedTop from './FeedTop';
import Comment from './Comment';

const Feed = () => {
  let commentId = useRef(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    id: commentId.current,
    userName: undefined,
    content: '',
    isLiked: false,
  });

  const commentForm = useRef();

  // comment handling - set comments in an array when they are submitted
  const submitComment = e => {
    e.preventDefault();
    setComments(cur => [comment, ...cur]);

    //clear comment input
    setComment(cur => ({ ...cur, content: '' }));
  };

  // comment handling - set comment
  const handleComment = e => {
    commentId.current = commentId.current + 1;
    setComment(cur => ({
      ...cur,
      id: commentId.current,
      content: e.target.value,
    }));
  };

  //activate the comment-btn when it's input
  const activateCommentBtn = () => {
    commentForm.current.classList.add('activate');
    if (comment.content.length === 0)
      commentForm.current.classList.remove('activate');
  };

  // comment handling - delete comment
  const onDelete = targetId => {
    setComments(comments =>
      comments.filter(comment => targetId !== comment.id)
    );
  };

  return (
    <div className="Feed">
      <FeedTop />
      <div className="user-info feed-description">
        <strong className="profile-id">canon_mj</strong> 날 좋은 하루💙
        <br />
        <div className="scroll">
          <ul className="comments feed-description user-info">
            {comments.map(comment => {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  comment={comment}
                  userName={comment.userName}
                  onDelete={onDelete}
                />
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
            value={comment.content}
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
