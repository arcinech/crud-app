import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { showModal } from "../../../redux/showModalRedux";
import { dateToStr } from '../../../utils/dateToStr'

const PostCard = ({id, title, author, publishedDate, shortDescription, content, category}) => {
    const dispatch = useDispatch();
    const urlParam = useParams();

    const urlCheck = (urlParam.name || !urlParam.id);
    // select short or full text
    const selectText = () => {
        if (urlCheck) return<Card.Text>{shortDescription}</Card.Text>
        return <p className="card-text" dangerouslySetInnerHTML={{__html: content}}/>
    }

    const handleShow = () => {
      dispatch(showModal(true))
    };
     

    return (
        <Card className={`text-left p-4 mr-auto ${urlCheck ? "border border-info" : "border-0"}`}>
            <div className="d-flex justify-content-between">
            <Card.Title className={`${(urlCheck ? "" : "mr-auto")}`}>{title}</Card.Title>
            {
                !urlCheck
                && 
                <div>
                    <Button as={Link} to={`/post/edit/${id}`} className="mx-1" variant="outline-info">Edit</Button>
                    <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
                </div>
            }
            </div>
            <Card.Text><strong>Author: </strong>{author}</Card.Text>
            <Card.Text><strong>Published: </strong>{dateToStr(publishedDate)}</Card.Text>
            <Card.Text><strong>Category: </strong>{category}</Card.Text>

            {selectText()}

            {urlCheck
            &&
            <div>
            <Button as={Link} to={`/post/${id}`} className="mt-auto mb-0">Read More</Button>
            </div>}
        </Card >
    );
}

export default PostCard;