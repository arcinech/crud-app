import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import { Link, useParams } from "react-router-dom";

const PostCard = ({id, title, author, publishedDate, shortDescription, content}) => {

    const urlParam = useParams();
    const urlCheck = (url) => (Object.keys(url).length === 0);

    // select short or full text
    const selectText = (url) => {
        if (urlCheck(url)) return<Card.Text>{shortDescription}</Card.Text>
        return <Card.Text>{content}</Card.Text>
    }
     

    return (
        <Card className={`text-left p-4 mr-auto ${urlCheck(urlParam) ? "border border-info" : "border-0"}`}>
            <div className="d-flex justify-content-between">
            <Card.Title className={`${(urlCheck(urlParam) ? "" : "mr-auto")}`}>{title}</Card.Title>
            {
                !urlCheck(urlParam) 
                && 
                <div>
                    <Button className="mx-1" variant="outline-info">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                </div>
            }
            </div>
            <Card.Text><strong>Author: </strong>{author}</Card.Text>
            <Card.Text><strong>Published: </strong>{publishedDate}</Card.Text>

            {selectText(urlParam)}

            <div>
            <Button as={Link} to={`/post/${id}`} className="mt-auto mb-0">Read More</Button>
            </div>
        </Card >
    );
}

export default PostCard;