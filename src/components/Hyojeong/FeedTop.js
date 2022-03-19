const FeedTop = () => {
  //paint heart btn or bookmark btn in the feed-bar
  const paintBtn = e => {
    e.target.classList.toggle('fas');
  };

  return (
    <div className="FeedTop">
      <div className="feed-bar">
        <div className="profile-box">
          <img
            alt="profile"
            className="profile"
            src="https://images.unsplash.com/photo-1617294255539-e6e4382ce3c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBzZWxmaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          />
          <strong className="profile-id">canon_mj</strong>
        </div>

        <i className="fas fa-ellipsis-h" />
      </div>
      <div className="feed-photo">
        <img alt="feed" src="/images/Hyojeong/feed.jpg" />
      </div>
      <div className="feed-btns">
        <button className="feed-heart-btn" onClick={paintBtn}>
          <i className="far fa-heart" />
        </button>
        <button>
          <i className="far fa-comment" />
        </button>
        <button>
          <i className="fas fa-external-link-alt" />
        </button>
        <button className="absolute" onClick={paintBtn}>
          <i className="far fa-bookmark" />
        </button>
      </div>
    </div>
  );
};

export default FeedTop;
