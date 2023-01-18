import { Link } from "react-router-dom"

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/CodeChallenge1`}>SysMap CC</Link>
      </h2>
      <ul>
        <li><Link to={`/CodeChallenge1`}>Home</Link></li>
        <li><Link to={`/CodeChallenge1/users`}>Users</Link></li>
        <li><Link to={`/CodeChallenge1/new`} className="new-btn">New Post</Link></li>
        <li><Link to={`/CodeChallenge1/about`}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

