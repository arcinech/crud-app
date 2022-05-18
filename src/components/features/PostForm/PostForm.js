import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const categories = useSelector(getAllCategories);

   categories.map(({id, name}) => console.log(id, name));

    const handleSubmit = () => {
      setContentError(!content);
      setDateError(!publishedDate);
      if ((content && content.length > 20) && publishedDate) {
        action({title, author, publishedDate, shortDescription, content, category})
      }
    };
    
  return (
    <>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="w-50" controlId='title'> 
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("titleReq", {required: true, minLength: 3})}
            value={title} 
            type="text" 
            placeholder="Title" 
            onChange={(e)=> setTitle(e.target.value)}
          />
          {errors.titleReq && <small className="d-block form-text text-danger mt-2">Title is too short!(min.3)</small>}
        </Form.Group>        
        <Form.Group className="w-50" controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", {required: true, minLength: 3})}
            value={author}
            type="text" 
            placeholder="Author" 
            onChange={(e)=> setAuthor(e.target.value)}
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">Author name is too short (min.3)!</small>}
        </Form.Group>
        <Form.Group className="w-50" controlId='publishDate'>
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)}/>
          {dateError && <small className="d-block form-text text-danger mt-2">Please input the date</small>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            {...register("shortDescription", {required: true, minLength: 20})}
            value={shortDescription}
            as="textarea" rows={3}
            type="text" 
            placeholder="Short Description" 
            onChange={(e)=> setShortDescription(e.target.value)}
            />
            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Short description is too short! (min. 20)</small>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select 
            value={category} 
            aria-label="Default select example" 
            {...register("category", {required: true})}
            onChange={e => setCategory(e.target.value)}>
            <option>Open this select menu</option>
            {categories.map(({id, name}) => <option key={id} value={name}>{name}</option>)}
            {errors.category && <small className="d-block form-text text-danger mt-2">Please, choose a category</small>}
          </Form.Select>  
        </Form.Group>
        <Form.Group controlId='content'>
          <Form.Label>Content</Form.Label>
          <ReactQuill value={content} onChange={setContent} placeholder="Content"/>
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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
  publishedDate: PropTypes.instanceOf(Date),
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};