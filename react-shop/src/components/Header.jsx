const DEFAULT_TITLE = " Welcome to our shop";
const DEFAULT_SUB_TITLE = " You can discover products. buy or even sell";

const Header = (props) => {
  const { title, subTitle } = props;
  return (
    <header className='mt-8'>
      <p className='text-center text-3xl font-bold text-blue-500'>
        {title || DEFAULT_TITLE}
      </p>
      <p className='mt-4 text-center text-xl font-semibold'>
        {subTitle || DEFAULT_SUB_TITLE}
      </p>
    </header>
  );
};

export default Header;
