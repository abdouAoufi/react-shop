const Button = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className='w-2/6 p-4 font-bold bg-blue-500 text-white rounded-lg mt-4 '>
      {props.text || "No text"}
    </button>
  );
};
export default Button;
