import React from 'react';
import Article from 'pages/Hyojeong/Main/Article';
import MainRight from 'pages/Hyojeong/Main/MainRight';
import 'pages/Hyojeong/Main/Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Article />
      <MainRight />
    </div>
  );
};

export default Main;
