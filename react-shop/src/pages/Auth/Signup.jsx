import Button from "../../components/Button";
import Header from "../../components/Header";

const SignUp = () => {
  return (
    <div>
      <Header />

      <div className='flex justify-center flex-col  items-center mt-16 '>
        <input
          placeholder='user name'
          className='p-4 text-md block border-2 rounded my-2 w-2/6 '
          type='text'
        />
        <input
          placeholder='email'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='email'
        />
        <input
          placeholder='password'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='password'
        />
        <input
          placeholder='confirm password'
          className='p-4 text-md block border-2 rounded my-2 w-2/6'
          type='password'
        />
       <Button text="Sign up" />
      </div>
    </div>
  );
};

export default SignUp;
