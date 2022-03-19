import React from 'react';

const Comment = ({ id, comment, onDelete }) => {
  const paintBtn = e => {
    e.target.classList.toggle('fas');
  };

  const deleteComment = () => {
    onDelete(id);
  };

  return (
    <li className="Comment">
      <strong>hyodduru</strong> {comment}
      <button className="heart-btn" onClick={paintBtn}>
        <i className="far fa-heart" />
      </button>
      <button className="delete-btn" onClick={deleteComment}>
        <i className="fas fa-times" />
      </button>
    </li>
  );
};

export default Comment;
