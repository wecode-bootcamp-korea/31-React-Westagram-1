import React from 'react';

const Comment = ({ id, content, userName, onDelete }) => {
  const paintHeartBtn = e => {
    e.target.classList.toggle('fas');
  };

  const deleteComment = () => {
    onDelete(id);
  };

  return (
    <li className="Comment">
      <strong>{userName}</strong> {content}
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

Comment.defaultProps = {
  userName: 'hyodduru',
};
// FIXME: 매개변수자리에서 default 값 설정 가능
