import React, { useState, useRef } from 'react';
import CommentList from './CommentList';

const Feed = ({ feed }) => {
  const { userProfileImg, userName, content, thumbnail, commentList } = feed;
  let commentId = useRef(4);
  const commentForm = useRef();

  const [comments, setComments] = useState([...commentList]);
  const [comment, setComment] = useState({
    id: commentId.current,
    userName: undefined,
    content: '',
  });
  let isCommentValid = comment.content.length > 0;

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

  // comment handling - delete comment
  const onDelete = targetId => {
    setComments(comments =>
      comments.filter(comment => targetId !== comment.id)
    );
  };

  //paint heart btn or bookmark btn in the feed-bar
  const paintBtn = e => {
    e.target.classList.toggle('fas');
  };

  return (
    <div className="Feed">
      <div className="feed-bar">
        <div className="profile-box">
          <img alt="profile" className="profile" src={userProfileImg} />
          <strong className="profile-id">{userName}</strong>
        </div>

        <i className="fas fa-ellipsis-h" />
      </div>
      <div className="feed-photo">
        <img alt="feed" src={thumbnail} />
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
        <strong className="profile-id">{userName}</strong> {content}
        <br />
        <div className="scroll">
          <CommentList comments={comments} onDelete={onDelete} />
        </div>
        <form
          ref={commentForm}
          className="comment-form"
          onSubmit={submitComment}
        >
          <input
            value={comment.content}
            type="text"
            className="comment-input"
            placeholder="댓글 달기..."
            onChange={handleComment}
          />
          <button
            className={isCommentValid ? 'comment-btn activate' : 'comment-btn'}
          >
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
