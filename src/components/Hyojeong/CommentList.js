import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDelete, setComments }) => {
  return (
    <div>
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
      ;
    </div>
  );
};

export default CommentList;
