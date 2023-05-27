import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        HOTELS dot NET
      </Link>
    </div>
  );
}

export default NavBar;
