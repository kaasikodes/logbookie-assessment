import { Link, useLocation } from "react-router-dom";

import { FiEdit2 } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const BrandLogo = "/assets/brand_logo_dark.svg";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className="app__header">
      <div className="container-fluid">
        <nav>
          <ul className="left-section">
            <li className="nav-item">
              <BiMenu className="nav-menu-icon" />
            </li>
            <li className="nav-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {!isHomePage && (
            <Link to="/" className="middle-section">
              <div className="nav-logo">
                <img alt="Expanzo logo" src={BrandLogo} />
              </div>
            </Link>
          )}
          <ul className="right-section">
            <li className="nav-item">
              <Link to="/login" className="d-flex">
                <div className="nav-item-icon">
                  {" "}
                  <FiEdit2 />
                </div>
                <span>login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="d-flex">
                <div className="nav-item-icon">
                  <FaUser />
                </div>
                <span>Registration</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
