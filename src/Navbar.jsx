import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">KVR</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Blog</Link></li>
        <li><Link to="/list">View Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
