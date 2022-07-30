import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default App;
