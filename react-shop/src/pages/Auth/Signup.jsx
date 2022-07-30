import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import { addUser } from "../../database/users.js";
import Header from "../../components/Header";
import { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const signup = () => {
    const user = {
      userName,
      email,
      password,
    };
    if (password === confirmedPassword) {
      addUser(user);
    } else {
      setIsPasswordHidden(false);
      setConfirmedPassword("password does not match");
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='password'
        />
        <input
          value={confirmedPassword}
          onChange={(e) => {
            if (!isPasswordHidden) {
              setIsPasswordHidden(true);
            }
            setConfirmedPassword(e.target.value);
          }}
          placeholder='confirm password'
          className={`p-4 text-md block border-2 rounded my-2 w-2/6 ${
            isPasswordHidden ? "text-black" : "text-red-600"
          }`}
          type={isPasswordHidden ? "password" : "text"}
        />
        <Button onClick={signup} text='Sign up' />
      </div>
    </div>
  );
};

export default SignUp;
