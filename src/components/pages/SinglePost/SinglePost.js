import { useParams } from "react-router-dom";

const SinglePost = () => {
  const {id} = useParams();
  return (
    <div>Single Post</div>
  );

};

export default SinglePost;