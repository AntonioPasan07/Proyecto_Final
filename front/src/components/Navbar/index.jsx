import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <span role="img" aria-label="home">
          🏠
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;