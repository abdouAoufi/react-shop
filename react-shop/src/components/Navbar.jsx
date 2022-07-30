import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='py-4 px-6 shadow '>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-bold text-blue-500'>Shop</h3>
        <div>
          <Link to='/login' className='font-bold text-lg mx-2'>
            Login
          </Link>
          <Link to='/signup' className='font-bold text-lg mx-2'>
            Sign up
          </Link>
          <Link to='/home' className='font-bold text-lg mx-2'>
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
