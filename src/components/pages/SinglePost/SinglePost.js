import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import PostCard from "../../common/PostCard/PostCard";
import styles from './SinglePost.module.scss'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { deleteCard } from "../../../redux/postsRedux";

const SinglePost = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const post = useSelector(state => getPostById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteCard(post.id));
  };

  if (!post) {return <Navigate to="/" />}
  else return (
    <>
      <article className={`${styles.contentWidth} mx-auto`}>
        <PostCard {...post} handleShow={handleShow}/>
      </article>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want ot delete this post?!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default SinglePost;