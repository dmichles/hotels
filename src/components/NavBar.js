import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Link to="/">
      <div className="navbar">
        <p className="navbar-link">HOTELS dot NET</p>
      </div>
    </Link>
  );
}

export default NavBar;
