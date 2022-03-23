import React, { useState, useEffect } from 'react';
import Feeds from '../../../components/Keun/Feeds';

// components
import OtherStory from '../../../components/Keun/OtherStory';
import { INFO_LIST } from '../../../components/Keun/OtherStoryData';
import RecoStory from '../../../components/Keun/RecoStory';
import { REFO_LIST } from '../../../components/Keun/RecoStoryData';
import TitleStory from '../../../components/Keun/TitleStory';
import { TITLE_LIST } from '../../../components/Keun/TitleStoryData';

//scss
import './Main.scss';

const Main = () => {
  // Feed데이터 불러오기
  let [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/feedsData.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);
  return (
    <div className="main">
      <main className="main-wrap">
        <div className="feeds">
          {feeds.map(feeds => {
            return <Feeds key={feeds.id} userName={feeds.userName} />;
          })}
        </div>
        <main className="main-right">
          <div className="main-right__mystory">
            <div className="main-right__img main-right__img--xl">
              <img
                alt="mystory-picture"
                src="https://avatars.githubusercontent.com/u/56650238?v=4"
              />
            </div>

            <div className="main-right__text">
              <h3>wecode_bootcamp</h3>
              <h3>WeCode | 위코드</h3>
            </div>
          </div>
          <div className="main-right__allstory">
            <TitleStory
              title={TITLE_LIST[0].title}
              subtitle={TITLE_LIST[0].subtitle}
            />

            {INFO_LIST.map(info => {
              return (
                <OtherStory
                  key={info.id}
                  infoName={info.name}
                  infoTime={info.time}
                />
              );
            })}
          </div>

          <div className="main-right__recommend">
            <TitleStory
              title={TITLE_LIST[1].title}
              subtitle={TITLE_LIST[1].subtitle}
            />
            {REFO_LIST.map(reco => {
              return (
                <RecoStory
                  key={reco.id}
                  recoName={reco.name}
                  recoFri={reco.fri}
                />
              );
            })}
          </div>
        </main>
      </main>
    </div>
  );
};

export default Main;
