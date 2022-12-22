import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <BsFillCartFill />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
