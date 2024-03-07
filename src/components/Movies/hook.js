import axios from 'axios';
import { useState } from 'react';



const useMovies = () => {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = () => {

        console.log("before axios")

        axios.get("http://localhost:3200/movies/")
        .then( response => {
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
            setError(e.message)
        })

        console.log("after axios")
        console.log("after...")
    }


    return {
        data,
        loading,
        error,
        getData
    }
}

export default useMovies;