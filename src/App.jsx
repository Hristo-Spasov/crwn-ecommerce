import { useEffect } from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navigation/Navbar";
import Authentication from "./pages/authentication/Authentication";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
