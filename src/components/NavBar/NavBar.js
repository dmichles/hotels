import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Hotels
      </Link>
      <Link to="/reservations" className="navbar-link">
        Reservations
      </Link>
    </div>
  );
}

export default NavBar;
