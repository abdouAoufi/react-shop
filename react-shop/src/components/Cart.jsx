import CartIcon from "../assets/images/close.png";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { total, show, hideCart, products } = props;
  return (
    <div
      style={{ width: "400px" }}
      className={`absolute top-16 right-0 bg-white min-h-80 p-4 border-2 ${
        show ? "block" : "hidden"
      } `}>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='text-3xl font-bold text-bold'>Cart </h3>
          <img
            onClick={hideCart}
            src={CartIcon}
            className='h-6 w-6 cursor-pointer'
          />
        </div>
        <h3 className='text-xl mt-4 font-bold text-bold text-gray-400'>
          Total : {total} DZD
        </h3>

        {products !== undefined &&
          products.map((item) => (
            <CartItem
              title={item.title}
              image={item.imgSrc}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Cart;
