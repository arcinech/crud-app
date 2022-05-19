import { useSelector } from "react-redux";
import { getPostByCategor } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import List from "../../features/PostList/PostList"

const SingleCategory = () => {
  const {name} = useParams();
  const posts = useSelector(state => getPostByCategor(state, name));

  return (
    <section>
      <h2>Category: {name}</h2>
      <List posts={posts} />
    </section>
  );
}

export default SingleCategory;