
import '../styles/nav.css'
import { Link, useLocation } from 'react-router-dom'

import Dropdown from './Dropdown'

const Nav = ({navItems, currentURL, setCurrentURL}) => {
    const location = useLocation().pathname
    

    // fix a problem by return ing differently use tenary operator or if have to use {}
    
    return (
        <div className = "nav__container">
            
            <div className="nav__items">
                {
                    navItems.map( (item,index) =>(
                        
                        <Link 
                        onClick = {() => setCurrentURL(item?.path)}
                        key = {index} 
                        to = {item?.path} 
                        className={`nav__item ${location === item?.path && 'active'} ${item.items && 'is-dropdown'}`}>

                        {item.name}
                        {item.items && 
                            (item.path === currentURL && <Dropdown items = {item.items} setCurrentURL = {setCurrentURL}/>)
                        
                        }

                        </Link>
                        
                        
                    ))
                }

            </div>
        
            
        </div>
    )
}



export default Nav
