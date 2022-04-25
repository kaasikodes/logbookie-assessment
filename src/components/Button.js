import React from 'react'
import '../styles/button.css'
const Button = ({text, bg, color}) => {
    return (
        <button style = {{background: bg, color }} className = "button">
            {text}
            
        </button>
    )
}

export default Button
