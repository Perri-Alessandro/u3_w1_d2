import { ListGroup } from "react-bootstrap";

const CommentList = (props) => (
  <ListGroup>
    <h6 className="mt-2">Valutazione - Recensione</h6>
    {props.commentsToShow.map((commento) => (
      <ListGroup.Item key={commento._id} className="border-secondary rounded-3">
        {commento.rate} - {commento.comment}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default CommentList;
