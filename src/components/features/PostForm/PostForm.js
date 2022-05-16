import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
      e.preventDefault();
      action({title, author, publishedDate, shortDescription, content})
    };
    
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="w-50" controlId='title'> 
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title} 
            type="text" 
            placeholder="Title" 
            onChange={(e)=> setTitle(e.target.value)}
          />
        </Form.Group>        
        <Form.Group className="w-50" controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            type="text" 
            placeholder="Author" 
            onChange={(e)=> setAuthor(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="w-50" controlId='publishDate'>
          <Form.Label>Published</Form.Label>
          <Form.Control
            value={publishedDate} 
            type="text" 
            placeholder="Published" 
            onChange={(e)=> setPublishedDate(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            value={shortDescription}
            as="textarea" rows={3}
            type="text" 
            placeholder="Short Description" 
            onChange={(e)=> setShortDescription(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId='content'>
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={content} 
            as="textarea" rows={5}
            type="textarea" 
            placeholder="Content" 
            onChange={(e)=> setContent(e.target.value)}
            />
        </Form.Group>
        <Button className="my-5" variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </>
  );
};

export default PostForm;

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  published: PropTypes.instanceOf(Date),
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};