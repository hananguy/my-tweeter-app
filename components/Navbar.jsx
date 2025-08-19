import { NavLink } from "react-router";
import "./Navbar.css";
import { useAuthContext } from "../auth/AuthProvider";
export default function Navbar() {

  const {onLogout} = useAuthContext();
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
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Login
          </NavLink>
        </li>
        <li>
        <a onClick={onLogout} className="aLink">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
