import PropTypes from "prop-types";
// import { FaDisplay } from "react-icons/fa6";
const Cook = ({ cook, handleCook }) => {
  const { title, preparing_time, calories } = cook;

  return (
    <div className='bg-gray-600 p-4 m-4 rounded-xl flex justify-around  gap-6 text-center'>
      <div>
        <p> {title} </p>
      </div>
      <div>
        <p>{preparing_time} </p>
      </div>
      <div>
        <p> {calories} </p>
      </div>

      <button
        onClick={() => handleCook(cook)}
        className="btn btn-active btn-accent rounded-full"
      >
        Preparing
      </button>
    </div>
  );
};

Cook.propTypes = {
  cook: PropTypes.object,
  handleCook: PropTypes.func,
};
export default Cook;
