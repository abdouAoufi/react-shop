import { NavLink as Link, useNavigate } from "react-router-dom";
import { ifUserLogged, logout } from "../database/users";

const Navbar = (props) => {
  const { total } = props;
  const isLogged = ifUserLogged();

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login")
  };

  return (
    <nav className='py-4 px-6 shadow '>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-bold text-blue-500'>Shop</h3>
        {isLogged ? (
          <p onClick={onLogout} to='/login' className='font-bold text-lg mx-2 cursor-pointer'>
            Log out
          </p>
        ) : (
          <>
            <Link to='/login' className='font-bold text-lg mx-2'>
              Login
            </Link>
            <Link to='/signup' className='font-bold text-lg mx-2'>
              Sign up{" "}
            </Link>
          </>
        )}

        <Link to='/home' className='font-bold text-lg mx-2'>
          Home
        </Link>

        {total !== undefined ? (
          <p className='font-bold text-lg mx-2 text-blue-400'>
            Total : {total || 0} DA
          </p>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
