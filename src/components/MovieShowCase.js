import React from 'react'
import '../styles/movieShowCase.css'


const MovieShowCase = ({imageUrl, altText, bigger}) => {
    return (
        <div style = {{margin:" 20px 10px"}} className = {`${bigger && 'movieShowCaseBigger' }`}>
            <img src = {imageUrl} alt = {altText} width = {bigger ? 230: 180}></img>
            
        </div>
    )
}

export default MovieShowCase
