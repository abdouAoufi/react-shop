const Navbar = () => {
  return (
    <nav className='py-4 px-6 shadow '>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-bold text-blue-500'>Shop</h3>
        <div>
          <a href='/' className='font-bold text-lg mx-2'>
            Login
          </a>
          <a href='/' className='font-bold text-lg mx-2'>
            Sign up
          </a>
          <a href='/' className='font-bold text-lg mx-2'>
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
