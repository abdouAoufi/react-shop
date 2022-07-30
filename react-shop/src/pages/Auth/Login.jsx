import Button from "../../components/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { getUsers, saveUser } from "../../database/users";
import { useNavigate } from "react-router";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = getUsers();

  const login = () => {
    const result = users.find((user) => userName === user.userName);
    if (!result) {
      return alert("this user name does not exist in our db");
    }
    const isPasswordMatch = users.find(
      (user) => password === user.password && userName === user.userName
    );
    if (!isPasswordMatch) {
      alert("wrong password");
      return setPassword("");
    }
    saveUser({ userName, password });
    navigate("/home");
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className='flex justify-center flex-col  items-center mt-16 '>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='user name'
          className='p-4 text-md block border-2 rounded my-2 w-2/6 '
          type='text'
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='password'
        />
        <Button onClick={login} text='Login' />
      </div>
    </div>
  );
}

export default Login;
