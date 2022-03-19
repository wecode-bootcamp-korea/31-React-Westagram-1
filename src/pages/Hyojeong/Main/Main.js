import React from 'react';
import Article from './Article';
import MainRight from './MainRight';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Article />
      <MainRight />
    </div>
  );
};

export default Main;
