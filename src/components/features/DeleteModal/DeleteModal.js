import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { modalState, hideModal } from '../../../redux/showModalRedux';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../redux/postsRedux';

const DeleteModal = ({id}) => {

  const show = useSelector(modalState);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideModal(false));
  };

  const handleDelete = () => {
    handleClose();
    dispatch(deletePost(id));
  }

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
    >
    <Modal.Header closeButton>
      <Modal.Title>Delete Warning</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure that you want ot delete this post?!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal;