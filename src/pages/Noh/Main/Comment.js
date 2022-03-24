import React from 'react';

const Comment = ({ comment }) => {
  const { userName, content } = comment;
  return (
    <div className="com">
      {userName} {content}
    </div>
  );
};

export default Comment;
