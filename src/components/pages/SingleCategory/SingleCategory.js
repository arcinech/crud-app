import { useSelector } from "react-redux";
import { getPostByCategor } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import List from "../../features/PostList/PostList"

const SingleCategory = () => {
  const {name} = useParams();
  const posts = useSelector(state => getPostByCategor(state, name));
  console.log(posts)
  return (
      <List posts={posts} />
  );
}

export default SingleCategory;