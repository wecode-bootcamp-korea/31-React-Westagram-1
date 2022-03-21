import React, { useState, useEffect } from 'react';
import Feed from '../../../components/Hyojeong/Feed';

const Article = () => {
  const [feeds, setFeeds] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {})
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {})
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);
  return (
    <div className="Article">
      {feeds.map(feed => (
        <Feed
          key={feed.id}
          feed={feed}
          comments={comments}
          setComments={setComments}
        />
      ))}
    </div>
  );
};

export default Article;
