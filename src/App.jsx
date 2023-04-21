import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navigation/Navbar";
import SignIn from "./pages/sign-in/SignIn";

const App = () => {
  const Shop = () => {
    return <h1>I'm SHOP</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
