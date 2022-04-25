import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/dropdown.css'

const Dropdown = ({items,setCurrentURL}) => {
    const location = useLocation().pathname
    return (
        <div className = "dropdown__container">
            {items.map((item, index)=>(
                <Link 
                onClick = {() => setCurrentURL(item.path)}
               
                key = {index} 
                to = {item?.path} 
                className={`dropdown__item ${location === item?.path && 'active'}`}>

                {item.name}
                

                </Link>
                

            ))}
            
        </div>
    )
}

export default Dropdown
