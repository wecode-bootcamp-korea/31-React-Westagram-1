import { useState } from 'react';
import Reply from '../../../components/Nav/Boni/Reply/Reply';
import './Main.scss';

function Main() {
  const [replyContents, setReplyContents] = useState('');
  const [postReplyContents, setPostReplyContents] = useState([]);
  const [isValied, setIsValied] = useState(false);

  const postReply = () => {
    const replyArr = [...postReplyContents];
    replyArr.push(replyContents);
    setPostReplyContents(replyArr);
    setReplyContents('');
    setIsValied(false);
  };

  return (
    <main className="lay-main">
      <div className="feeds">
        <article className="feed-item">
          <div className="feed-header">
            <div className="left-area">
              <div className="profile-wrap">
                <img
                  className="img-profile"
                  src="/images/Boni/profile_01.png"
                />
              </div>
              <div className="info-wrap">
                <div className="data-id">Cannon_mj</div>
              </div>
            </div>
            <div className="right-area">
              <button className="button-option"></button>
            </div>
          </div>
          <div className="feed-body">
            <img
              className="img-feed"
              src="/images/Boni/feed_01.png"
              alt="feed image"
            />
            <div className="tool-bar">
              <div className="left-area">
                <button className="button-tool active">
                  <i className="icon-button icon-button-like"></i>
                </button>
                <button className="button-tool">
                  <i className="icon-button icon-button-reply"></i>
                </button>
                <button className="button-tool">
                  <i className="icon-button icon-button-share"></i>
                </button>
              </div>
              <div className="right-area">
                <button className="button-tool">
                  <i className="icon-button icon-button-bookmark"></i>
                </button>
              </div>
            </div>
            <div className="info-like">
              <div className="profile-wrap">
                <img
                  src="/images/Boni/profile_01.png"
                  className="img-profile"
                />
              </div>
              <div className="data-follow-id">follower</div>
              <div className="txt">님</div>
              <div className="data-like-count">외 10명</div>
              <div className="txt">이 좋아합니다.</div>
            </div>
            <div className="content-wrap">
              <div className="data-writer-id">Cannon_mj</div>
              <div className="data-content">
                위워크에서 진행한 베이킹 클래스...
              </div>
              <button className="button-more">더 보기</button>
            </div>
          </div>
          <ul className="reply-list">
            {postReplyContents.map((item, i) => {
              return <Reply item={item} key={i} />;
            })}
          </ul>
          <div className="feed-footer">
            <input
              value={replyContents}
              className="input-reply"
              placeholder="댓글 달기"
              onChange={event => {
                setReplyContents(event.target.value);
              }}
              onKeyUp={event => {
                event.target.value.length > 0
                  ? setIsValied(true)
                  : setIsValied(false);
              }}
            />
            <button
              className={
                isValied === true
                  ? 'active button-reply'
                  : 'disabled button-reply'
              }
              onClick={postReply}
            >
              게시
            </button>
          </div>
        </article>
      </div>
      <div className="main-right">
        <div className="user-section">
          <div className="profile-wrap">
            <img
              className="img-profile"
              src="/images/Boni/profile_01.png"
              alt=""
            />
          </div>
          <div className="info-wrap">
            <div className="data-id">wecode_bootcamp</div>
            <div className="data-name">asdfasdf</div>
          </div>
        </div>
        <div className="list-section">
          <div className="list-header">
            <div className="left-area">
              <div className="list-title">스토리</div>
            </div>
            <div className="right-area">
              <button className="button-more">모두 보기</button>
            </div>
          </div>
          <div className="list-body">
            <ul className="user-list">
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdfa</div>
                    <div className="data-time">20시간</div>
                  </div>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdfa</div>
                    <div className="data-time">20시간</div>
                  </div>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdfa</div>
                    <div className="data-time">20시간</div>
                  </div>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdfa</div>
                    <div className="data-time">20시간</div>
                  </div>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdfa</div>
                    <div className="data-time">20시간</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="list-section">
          <div className="list-header">
            <div className="left-area">
              <div className="list-title">스토리</div>
            </div>
            <div className="right-area">
              <button className="button-more">모두 보기</button>
            </div>
          </div>
          <div className="list-body">
            <ul className="user-list">
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
              <li className="user-item">
                <div className="left-area">
                  <div className="profile-wrap">
                    <img
                      src="/images/Boni/profile_01.png"
                      className="img-profile"
                      alt=""
                    />
                  </div>
                  <div className="info-wrap">
                    <div className="data-id">asdf</div>
                    <div className="data-relative">aa님 외 3명이</div>
                  </div>
                </div>
                <div className="right-area">
                  <button className="button-follow">팔로우</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-section">
          <p className="copyright-text">
            Instagram 정보 · 지원 · 홍보 · 센터 · API · 채용 · 정보 ·
            개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
          </p>
          <p className="copyright-text">2019 INSTAGRAM</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
