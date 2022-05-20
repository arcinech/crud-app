import { useSelector } from "react-redux";
import { getPostByCategor } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import PostsList from "../../features/PostsList/PostsList"

const SingleCategory = () => {
  const {name} = useParams();
  const posts = useSelector(state => getPostByCategor(state, name));

  return (
    <section>
      <h2>Category: {name}</h2>
      <PostsList posts={posts} />
    </section>
  );
}

export default SingleCategory;