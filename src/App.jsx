import { useEffect } from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navigation/Navbar";
import Authentication from "./pages/authentication/Authentication";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();

  // Centralize the current user state so we dont need to put it in every component
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // passing the seriliazed check
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
