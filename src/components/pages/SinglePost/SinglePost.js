import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import PostCard from "../../common/PostCard/PostCard";
import styles from './SinglePost.module.scss'
import DeleteModal from '../../features/DeleteModal/DeleteModal'

const SinglePost = () => {
  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));

  if (!post) {return <Navigate to="/" />}
  else return (
    <>
      <article className={`${styles.contentWidth} mx-auto`}>
        <PostCard {...post}/>
        <DeleteModal id={id} />
      </article>
    </>
  );

};

export default SinglePost;