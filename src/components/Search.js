import React from 'react'
import '../styles/search.css'
import Button from './Button'

const Search = ({movieCategories}) => {
    return (
        <div className = 'search__container'>
            <input type="search" name="searchMovies" id="searchMovies" className = "search__input" placeholder="What movie?"/>
            <select name="searchCategory" id="searchCategory" className = "search__input">
                {
                    movieCategories.map(category => (

                        <option value="category">{category}</option>

                    ))
                }
                
            </select>
            <Button text= "Search" color = "#000" bg = {`rgb(249, 220, 75)`} />

            
        </div>
    )
}

export default Search
