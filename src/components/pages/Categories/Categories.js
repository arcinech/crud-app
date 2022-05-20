import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import styles from './Categories.module.scss'

const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <section className={`${styles.contentWidth} mx-auto`}>
      <h2>Categories</h2>
      <ListGroup>
        { categories.map(({id, name}) => (
          <ListGroup.Item key={id} className="mb-4">
            <Link to={`/categories/${name}`}>{name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

export default Categories;