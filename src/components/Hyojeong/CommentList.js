import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDelete }) => {
  return (
    <div>
      <ul className="CommentList feed-description user-info">
        {comments.map(comment => {
          const { id, userName, content } = comment;
          //FIXME: 매개변수 자리에서 구조분해
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
