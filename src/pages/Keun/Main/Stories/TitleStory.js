import { useState } from 'react';

function TiTleStory({ title, subtitle }) {
  return (
    <div className="main-right__title">
      <h3>{title}</h3>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default TiTleStory;
