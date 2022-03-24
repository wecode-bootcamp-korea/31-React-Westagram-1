import React, { useState } from 'react';

function Reco({ recoName, recoFri }) {
  return (
    <div className="main-right__otherstory main-right__otherstory--follow">
      <div className="main-right__img">
        <img
          alt="recommend-picture"
          src="https://avatars.githubusercontent.com/u/56650238?v=4"
        />
      </div>
      <div className="main-right__text">
        <h3>{recoName}</h3>
        <h3>{recoFri}</h3>
      </div>
      <div className="main-right__follow">
        <h3>팔로우</h3>
      </div>
    </div>
  );
}

export default Reco;
