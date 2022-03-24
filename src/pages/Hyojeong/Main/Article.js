import React, { useState, useEffect } from 'react';
import Feed from '../../../components/Hyojeong/Feed';

const Article = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/Hyojeong/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <div className="Article">
      {feeds.map(feed => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default Article;
