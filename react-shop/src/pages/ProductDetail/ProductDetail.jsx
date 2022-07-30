import { useLocation, useNavigate } from "react-router";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { title, price, discount, imgSrc } = state;

  return (
    <div className=''>
      <button
        onClick={() => {
          navigate("/home");
        }}
        className='absolute right-0 top-0 bg-green-400 p-4 font-bold text-white rounded'>
        close
      </button>
      <div className='flex justify-center px-16 items-center mt-32 '>
        <div className='mx-8'>
          <p className='text-2xl font-bold '>Product Name : {title} </p>
          <p className='text-xl font-bold text-blue-600 '>Price : {price}</p>
          <p className='text-xl font-bold text-red-600 '>
            Discount : {discount} %
          </p>
        </div>
        <img src={imgSrc}  style={{width : 600}}/>
      </div>
    </div>
  );
};

export default ProductDetail;
