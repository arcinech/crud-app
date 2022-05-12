import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";

const SinglePost = () => {
  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));
  console.log(post.id);
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.publishDate}</p>
      <div>
        <p>{post.content}</p>
      </div>
    </article>
  );

};

export default SinglePost;