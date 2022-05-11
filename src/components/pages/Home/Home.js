import Button from 'react-bootstrap/button';
import {Link} from 'react-router-dom';
import List from '../../features/PostsList/List';

const Home = () => {
  return (
    <>
      <div>
        <h2>All Posts</h2>
        <Button as={Link} to="/post/add" variant="outline-info">Add post</Button>
      </div>
      <div>
        <List />
      </div>
    </>
  );
};

export default Home;