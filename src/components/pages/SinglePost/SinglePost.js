import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import PostCard from "../../common/PostCard/PostCard";
import styles from './SinglePost.module.scss'

const SinglePost = () => {

  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));

  // console.log(post.id);
  return (
    <article className={`${styles.contentWidth} mx-auto`}>
      <PostCard {...post} />
    </article>
  );

};

export default SinglePost;