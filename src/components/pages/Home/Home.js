import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import List from '../../features/PostList/PostList';
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux.js";

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="my-auto">All Posts</h2>
        <div className="my-auto">
          <Button as={Link} to="/post/add" variant="outline-info">Add post</Button>
        </div>
      </div>
      <div>
        <List posts={posts} />
      </div>
    </>
  );
};

export default Home;