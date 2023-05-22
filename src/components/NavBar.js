import Link from './Link';

function NavBar() {
  return (
    <Link to="/">
      <div className="navbar">
        <a className="navbar-link" href="/">
          HOTELS dot NET
        </a>
      </div>
    </Link>
  );
}

export default NavBar;
