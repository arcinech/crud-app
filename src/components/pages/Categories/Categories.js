import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <ListGroup>
     { categories.map(({id, name}) => (
       <ListGroup.Item key={id} className="mb-4">
         <Link to={`/categories/${name}`}>{name}</Link>
       </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Categories;