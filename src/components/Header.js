

import {Link} from "react-router-dom";
import BrandLogo from '../assets/brand_logo_white.svg'

const Header = () => {
    
    return (
        <header className = "app__header">
          <div className = "container-fluid">
            <nav>
              <ul className="left-section">
                <li className="nav-item">
                  ''''
                </li>
                <li className="nav-item">
                  <Link to = "/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                <Link to = "/contact">Contact</Link>
                </li>


              </ul>
              <Link to = "/" className="middle-section">
                <div className="nav-logo">
                    <img alt = "Expanzo logo" src={BrandLogo}/>

                </div>

              </Link>
              <ul className="right-section">
            
                <li className="nav-item">
                  <Link to = "/login" className="d-flex">
                    <div className="nav-item-icon"> <span>ro</span></div>
                    <span>Login</span>
                    
                  </Link>
                </li>
                <li className="nav-item">
                <Link to = "/register" className="d-flex">
                    <div className="nav-item-icon"></div>
                    <span>Registration</span>
                </Link>
                </li>

              </ul>



            </nav>
          
            
          </div>
          

        </header>
    )
}

export default Header
