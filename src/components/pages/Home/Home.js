import Button from 'react-bootstrap/button';
import {Link} from 'react-router-dom';
import List from '../../features/PostList/PostList';

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="my-auto">All Posts</h2>
        <div className="my-auto">
          <Button as={Link} to="/post/add" variant="outline-info">Add post</Button>
        </div>
      </div>
      <div>
        <List />
      </div>
    </>
  );
};

export default Home;