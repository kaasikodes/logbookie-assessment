import {Link} from "react-router-dom";

import "../styles/home.css"
import BrandLogo from "../assets/brand_logo_dark.svg"

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-logo'>
            <img src = {BrandLogo} alt = "Brand Logo"/>
        </div>
        <ul className="home-nav-items">
                <li className="nav-item">
                <Link to = "/all">all</Link>
                </li>
                <li className="nav-item">
                  <Link to = "/companies">Companies</Link>
                </li>
                <li className="nav-item">
                <Link to = "/phone">phone</Link>
                </li>


              </ul>
    </div>
  )
}

export default Home