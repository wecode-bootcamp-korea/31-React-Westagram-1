import React, { useState } from 'react';

function OtherStory({ infoName, infoTime }) {
  return (
    <div className="main-right__otherstory">
      <div className="main-right__img">
        <img
          alt="story-picture"
          src="https://avatars.githubusercontent.com/u/56650238?v=4"
        />
      </div>
      <div className="main-right__text">
        <h3>{infoName}</h3>
        <h3>{infoTime}</h3>
      </div>
    </div>
  );
}

export default OtherStory;
