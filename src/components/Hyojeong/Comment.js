const Comment = ({ comment }) => {
  return (
    <li className="Comment">
      <strong>hyodduru</strong> {comment}
      <button className="heart-btn">
        <i className="far fa-heart" />
      </button>
      <button className="delete-btn">
        <i className="fas fa-times" />
      </button>
    </li>
  );
};

export default Comment;
