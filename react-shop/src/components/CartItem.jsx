import { useState } from "react";

const CartItem = (props) => {
  const { title, price, image, changeQuantity, quantity } = props;
  const [currentQuantity, setQuantity] = useState(quantity);

  const confirmQuantity = () => {
    changeQuantity(title, currentQuantity);
  };

  return (
    <div className='mt-4 flex gap-4'>
      <img className='h-16 w-16' src={image} />
      <div className='flex flex-col justify-between font-bold '>
        <p className='font-bold'> {title}</p>

        <p className='text-violet-500'>
          {price} x{" "}
          <input
            value={currentQuantity}
            onChange={(e) => {
              if (+e.target.value > 0) {
                setQuantity(e.target.value);
              }
            }}
            type='number'
            className='border-2 w-10 mx-2 pl-2'
          />
          <button
            onClick={confirmQuantity}
            className='p-1 bg-violet-400 text-white rounded'>
            confirm
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
