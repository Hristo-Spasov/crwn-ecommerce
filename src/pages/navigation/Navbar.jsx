import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import { logoutUser } from "../../utils/firebase/firebase";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await logoutUser();
    setCurrentUser(null);
  };

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
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
