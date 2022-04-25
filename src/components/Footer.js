import {Link} from "react-router-dom";
import BrandLogo from '../assets/brand_logo_dark.svg'

const Footer = () => {
  return (
        
    <footer className = "app__footer">  
    <div className="container-footer footer-section">
       <div className="footer-logo">
         <img src = {BrandLogo} alt = "BrandLogo"/>
       </div>
       <div className = "footer-nav-items">
       <ul className="">
                <li className="nav-item">
                  Contacts
                </li>
                <li className="nav-item">
                  <Link to = "/dashboard">Phone</Link>
                </li>
                <li className="nav-item">
                <Link to = "/contact">Top Search</Link>
                </li>


              </ul>
       </div>
    </div>
      
     

    </footer>
  )
}

export default Footer