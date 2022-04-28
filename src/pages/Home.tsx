import { Link, useLocation } from "react-router-dom";

import "../styles/home.css";

const BrandLogo = "/assets/brand_logo_dark.svg";

const Home = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div className="home-container">
      <div className="home-logo">
        <img src={BrandLogo} alt="Brand Logo" />
      </div>
      <ul className="home-nav-items">
        <li className="nav-item">
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            all
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/companies"
            className={pathname === "/companies" ? "active" : ""}
          >
            Companies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/phone" className={pathname === "/phone" ? "active" : ""}>
            phone
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
