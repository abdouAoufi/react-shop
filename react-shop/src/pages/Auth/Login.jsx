import Button from "../../components/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='flex justify-center flex-col  items-center mt-16 '>
        <input
          placeholder='user name'
          className='p-4 text-md block border-2 rounded my-2 w-2/6 '
          type='text'
        />

        <input
          placeholder='password'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='password'
        />
        <Button text='Login' />
      </div>
    </div>
  );
}

export default Login;
