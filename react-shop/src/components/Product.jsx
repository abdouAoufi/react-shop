const DEFAULT_SRC =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthealmanian.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fproduct_image_thumbnail_placeholder.png&f=1&nofb=1";

const Product = (props) => {
  const { title, price, imgSrc, discount } = props;
  return (
    <div className='w-1/4 border-2 rounded-lg p-4 shadow my-4'>
      <img className='cover' src={imgSrc || DEFAULT_SRC} alt={title} />

      <h1 className='mt-4 font-bold text-lg'>{title || "no title"}</h1>
      <div className='flex justify-between'>
        <div>
          <p className='text-md font-semibold text-red-600'>{price || 0}</p>
          <p className='text-gray-400'>{discount || 0} %</p>
        </div>
        <button className='px-2 py-0 bg-green-600 text-white rounded'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
