import AddPostForm from "../../features/AddPostForm/AddPostForm";
import styles from './PostAdd.module.scss'

const PostAdd = () => {

  return (
    <section className={styles.contentWidth}>
      <h2>Add Post</h2>
      <AddPostForm />
    </section>
  );

};

export default PostAdd;