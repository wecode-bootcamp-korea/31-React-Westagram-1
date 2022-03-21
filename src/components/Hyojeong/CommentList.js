import React, { useEffect } from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDelete, setComments }) => {
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {})
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);

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
        })}{' '}
      </ul>
      ;
    </div>
  );
};

export default CommentList;
