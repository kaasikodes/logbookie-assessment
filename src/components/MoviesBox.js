import React, {useEffect, useState} from 'react'
import axios from '../axios'
import MovieShowCase from './MovieShowCase'
import '../styles/moviesBox.css'

const MoviesBox = ({fetchUrl}) => {
    const [movies, setMovies] = useState([])
    const movieImageBaseUrl = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        const getMovies = async ()=>{
            const data  = await axios.get(fetchUrl)
            const results =  data.data.results
            setMovies(results)
        }
        getMovies()
        
    }, [fetchUrl])


    return (
        <div className = "moviesBox__container py-100">
            <div className = "moviesBox__center">
                {
                    movies.map((movie) =>(
                        <MovieShowCase 
                            className = "movieBox__movie"
                            key={movie.id} 
                            imageUrl = {`${movieImageBaseUrl}${movie.poster_path}`} 
                            altText = {movie?.title || movie?.original_title}
                            

                        />
                    ))
                }

            </div>
            
            
        </div>
    )
}

export default MoviesBox
