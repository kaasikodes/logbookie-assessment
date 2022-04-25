
import Nav from './Nav'
import '../styles/movieNav.css'

const MovieNav = ({currentURL, setCurrentURL, movieNavItems}) => {
    
    return (
        <div className = "movieNav__container">
            <Nav navItems = {movieNavItems}  currentURL = {currentURL} setCurrentURL = {setCurrentURL}/>
            
        </div>
    )
}

export default MovieNav
