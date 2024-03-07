import { useParams } from "react-router-dom";
import useMovieInfo from "./hook";
import { useEffect } from "react";
import Loading from "../Loading";
import Error from '../Error';
import { Button } from "react-bootstrap";

const MovieInfo = () => {

    let { id } = useParams();
    const { movie,loading,error, getMovie, deleteMovie } = useMovieInfo()

   const dummyMovie = {
        "id": 10,
        "title": "The Lord  OF the Rings",
        "description": "A young hobbit, Frodo, must destroy a powerful ring to save Middle-earth.",
        "releaseDate": "2001-12-19T00:00:00.000Z",
        "duration": 183,
        "imageUrl": "10.jpg",
        "cost": 73.39,
        "createdAt": "2023-11-10T01:46:06.000Z",
        "updatedAt": "2023-11-10T23:54:52.000Z",
        "genre_id": 5,
        "language_id": 1
    }

    useEffect(()=>{
        getMovie(dummyMovie)
    },[]);

    

    const getTitle = () => {
        if(movie != null) {
          return  (
          <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
          <p>Duration: {movie.duration} minutes</p>
          <p>Cost: ${movie.cost}</p>
          {movie.imageUrl && <img src={movie.imageUrl} alt="Movie Poster" />}
      </div> 
          );
        }
        else {
            <></>
        }
    }


    return (
       <>
        { loading && <Loading/>}
        {
           getTitle()
        }
        { movie != null && <Button className="danger" onClick={deleteMovie}>Delete</Button>}
        { error != null && <Error message={error} />}
       </>        
    )
}

const styles = {
    container: {
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
        maxWidth: '20%',
        height: 'auto',
        marginTop: '10px',
    },
   
    button: {
        marginTop: '10px',
    }
};

export default MovieInfo;