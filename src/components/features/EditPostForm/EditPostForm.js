import { useDispatch,useSelector } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import { useNavigate, Navigate,useParams  } from "react-router-dom";
import PostForm from '../PostForm/PostForm';
import {getPostById} from '../../../redux/postsRedux';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({...post, id}));
    navigate("/");
  };

  if (!post) {return <Navigate to="/" />}
  else 

  return (
    <>
      <PostForm action={handleSubmit} actionText="Edit post" {...post} />
    </>
  )
}

export default EditPostForm;