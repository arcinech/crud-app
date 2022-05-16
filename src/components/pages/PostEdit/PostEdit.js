import EditPostForm from '../../features/EditPostForm/EditPostForm';
import styles from './PostEdit.module.scss';
const PostEdit = () => {

  return (
    <section className={styles.contentWidth}>
      <h2>Edit Post</h2>
      <EditPostForm />
    </section>
    );

};

export default PostEdit;