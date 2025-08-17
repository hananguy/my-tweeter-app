import { NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
