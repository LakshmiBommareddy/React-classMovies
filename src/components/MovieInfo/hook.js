//import axios from "axios";
import { useState } from "react";

const useMovieInfo = () => {
    const [ movie, setMovie ] = useState(null);
    const [ loading, setLoading ] = useState(true)
    const [ error,setError] = useState(null);

    const getMovie = (dummyMovie) => {

        // eslint-disable-next-line no-undef
        setMovie(dummyMovie);
        setLoading(false);
    }

    const deleteMovie = ()=> {
        setLoading(true)
        setMovie(null);
        setTimeout(()=>{
           window.alert(`Movie Deleted Successfully`);
           
        },1000)
    }

    return {
        movie,
        loading,
        error,
        getMovie,
        deleteMovie
    }

}

export default useMovieInfo;