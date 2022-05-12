import { useParams } from "react-router-dom";

const PostEdit = () => {
  const {id} = useParams();
  return (
    <div>Edit Post</div>
  );

};

export default PostEdit;