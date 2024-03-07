import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Movie = ({movie})=> {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={'images/'+movie.imageUrl} width={300} height={300} />
        <Card.Body>
            <Card.Title>{movie.title.substring(0,15)} {movie.id}</Card.Title>
            <Card.Text>
            {movie.description.substring(0,60)}...
            </Card.Text>
            <Link variant="primary" to={"/movieInfo/"+movie.id}>View</Link>
        </Card.Body>
        </Card>
    )
}

export default Movie