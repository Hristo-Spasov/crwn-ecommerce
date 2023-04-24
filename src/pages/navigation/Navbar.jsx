import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { logoutUser } from "../../utils/firebase/firebase";
import Cart from "../../components/cart/Cart";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={logoutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <Cart />
        </div>
        {isOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
