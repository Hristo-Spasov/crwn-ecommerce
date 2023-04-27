import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./Navbar.style.jsx";
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
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} alt="" className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={logoutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <Cart />
        </NavLinksContainer>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
