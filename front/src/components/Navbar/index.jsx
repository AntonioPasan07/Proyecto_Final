import { Link } from "wouter";
import {NavbarContainer} from "./styles";
const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/dashboard">
        <span role="img" aria-label="home">Home:
          🏠
        </span>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;