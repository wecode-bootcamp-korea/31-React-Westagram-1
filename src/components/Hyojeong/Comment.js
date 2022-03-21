import React from 'react';

const Comment = ({ id, comment, userName = 'hyodduru', onDelete }) => {
  const paintHeartBtn = e => {
    e.target.classList.toggle('fas');
  };

  const deleteComment = () => {
    onDelete(id);
  };

  return (
    <li className="Comment">
      <strong>{userName}</strong> {comment.content}
      <button className="heart-btn" onClick={paintHeartBtn}>
        <i className="far fa-heart" />
      </button>
      <button className="delete-btn" onClick={deleteComment}>
        <i className="fas fa-times" />
      </button>
    </li>
  );
};

export default Comment;

// id: commentsCounter,
// userName: '',
// content: '',
// isLiked: false,

Comment.defaultProps = {
  userName: 'hyodduru',
};
