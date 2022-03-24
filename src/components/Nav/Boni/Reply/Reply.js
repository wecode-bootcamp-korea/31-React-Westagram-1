import './Reply.scss';

const Reply = props => {
  return (
    <li className="reply-item">
      <div className="reply-group">
        <span className="data-writer-id">wecode_bootcamp</span>
        <span className="data-content">{props.item}</span>
      </div>
    </li>
  );
};
export default Reply;
