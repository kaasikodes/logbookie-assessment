
import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react'
import axios from '../axios';
import MovieShowCase from './MovieShowCase';

const HeroCarousel = ({fetchUrl}) => {
    const [movies, setMovies] = useState([])
    const movieImageBaseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {

        const getMovies = async ()=>{

            const data = await axios.get(fetchUrl);
            const result =  data.data.results
            console.log(result)
            setMovies(result)

        }

        getMovies()
        
       
    }, [fetchUrl])


    return (
        <div>
            <Carousel pagination = {false} itemsToShow = {5} itemsToScroll = {5}>
                {
                    movies.map((movie,index) => (
                        <MovieShowCase 
                            key={movie.id} 
                            imageUrl = {`${movieImageBaseUrl}${movie.poster_path}`} 
                            altText = {movie?.title || movie?.original_title}
                            bigger = {[2,7,12,17].includes(index)}

                        />
                    ))
                }

            </Carousel>

            
        </div>
    )
}

export default HeroCarousel
