import PropTypes from "prop-types";
const Cooking = ({ ranna }) => {
  const { title, preparing_time, calories } = ranna;
  return (
    <div className="flex justify-around text-center gap-4 pt-4 ">
      <div>
        <p className="w-2/3">{title} </p>
      </div>
      <div className="pr-6">
        <p className="w-1/3">{preparing_time} </p>
      </div>
      <div>
        <p> {calories} </p>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  ranna: PropTypes.object.isRequired,
};
export default Cooking;
