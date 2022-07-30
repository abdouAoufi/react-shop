import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product' element={<ProductDetail />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default App;
