import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🎬 FilmSys
        </Link>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/filmes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Filmes
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
