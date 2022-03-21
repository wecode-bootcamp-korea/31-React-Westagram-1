import React, { useState, useEffect } from 'react';
import Feed from '../../../components/Hyojeong/Feed';

const Article = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {})
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

// 각 feed 마다 다른 댓글을 주어서 rendering 해야함
// feed 에 props로 comments와 comment 전달해주기
