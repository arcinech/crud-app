import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import PostCard from "../../common/PostCard/PostCard.js";

const PostsList = ({posts}) => {
  return (
    <Row md={3} sd={2} className="py-4">
     { posts.map((post) => (
       <Col key={post.id} className="mb-4">
         <PostCard {...post} />
       </Col>
      ))}
    </Row>
  );
}
export default PostsList;