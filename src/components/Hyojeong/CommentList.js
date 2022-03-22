import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDelete }) => {
  return (
    <div>
      <ul className="comments feed-description user-info">
        {comments.map(comment => {
          const { id, userName, content } = comment;
          return (
            <Comment
              key={id}
              id={id}
              userName={userName}
              content={content}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default CommentList;
