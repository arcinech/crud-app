import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState('');

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setShortDescription('');
    setContent('');
    setPublished('');    
  }

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addPost({title, author, shortDescription, content, published}));
    resetForm();
    navigate("/");
  }

  return (
    <>
      <Form onSubmit={handleAdd}>
        <Form.Group className="w-50" controlId='title'> 
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Title" 
            onChange={(e)=> setTitle(e.target.value)}
          />
        </Form.Group>        
        <Form.Group className="w-50" controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Author" 
            onChange={(e)=> setAuthor(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="w-50" controlId='publishDate'>
          <Form.Label>Published</Form.Label>
          <Form.Control 
            type="date" 
            placeholder="Published" 
            onChange={(e)=> setPublished(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            type="text" 
            placeholder="Short Description" 
            onChange={(e)=> setShortDescription(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId='content'>
          <Form.Label>Content</Form.Label>
          <Form.Control 
            as="textarea" rows={5}
            type="textarea" 
            placeholder="Content" 
            onChange={(e)=> setContent(e.target.value)}
            />
        </Form.Group>
        <Button className="my-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AddPostForm;