import "./Nav.css";
import Logo from "./assets/App.logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img className="navbar-image" src={Logo} alt="Airplane Icon" />
        <h1 className="navbar-logo">
          One<span className="navbar-logo-highlight">Trip</span>
        </h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
