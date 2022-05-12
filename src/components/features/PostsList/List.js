import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import styles from './List.module.scss';

const List = () => {
  const posts = useSelector(getAllPosts);
  console.log(posts);

  return (
    <Row md={3} sd={2} className="py-4">
     { posts.map(({id, title, author, publishedDate, shortDescription}) => (
       <Col key={id} className="mb-4">
        <Card className="border border-info text-left p-4 mr-auto">
            <Card.Title>{title}</Card.Title>
            <Card.Text><strong>Author: </strong>{author}</Card.Text>
            <Card.Text><strong>Published: </strong>{publishedDate}</Card.Text>
            <Card.Text>{shortDescription}</Card.Text>
            <Button as={Link} to={`/post/${id}`} className={`${styles.wMaxContent} mt-auto mb-0 w-auto`}>Read More</Button>
        </Card>
       </Col>
      ))}
    </Row>
  );
}
export default List;