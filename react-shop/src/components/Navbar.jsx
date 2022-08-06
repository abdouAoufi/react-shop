import { useState } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { ifUserLogged, logout } from "../database/users";
import Cart from "./Cart";
import cartImg from "../assets/images/cart.png";

const Navbar = (props) => {
  const { total, listProducts } = props;
  const isLogged = ifUserLogged();
  const [isCartShow, setIsCartShow] = useState(false);

  const navigate = useNavigate();

  const showCart = () => {
    setIsCartShow(true);
  };
  const hideCart = () => {
    setIsCartShow(false);
  };

  const onLogout = () => {
    logout();
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <nav className='py-4 px-6 shadow '>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-bold text-blue-500'>Shop</h3>
        <Cart
          products={listProducts}
          total={total}
          show={isCartShow}
          hideCart={hideCart}
        />
        {isLogged ? (
          <p
            onClick={onLogout}
            className='font-bold text-lg mx-2 cursor-pointer'>
            Log out
          </p>
        ) : (
          <>
            <Link to='/login' className='font-bold text-lg mx-2'>
              Login
            </Link>
            <Link to='/signup' className='font-bold text-lg mx-2'>
              Sign up
            </Link>
          </>
        )}
        <Link to='/home' className='font-bold text-lg mx-2'>
          Home
        </Link>
        {total !== undefined ? (
          <img
            src={cartImg}
            onClick={showCart}
            className=' cursor-pointer h-8 w-8 mx-2  hover:scale-125 ease-in duration-300'
          />
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
