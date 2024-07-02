import PropTypes from "prop-types";
import { FaClock } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";




const Food = ({ food, handleWantToCook }) => {
  const { title, cover, description, ingredients, preparing_time, calories } =
    food;
  return (
    <div className="border-solid rounded-lg shadow-2xl box-border shadow-red-950 p-4 m-4">
      <img
        className="cover-image rounded"
        src={cover}
        alt={`Cover Picture Of The Title ${title}`}
      />
      <h1 className="text-4xl pt-2 pb-2"> {title} </h1>
      <p className="text-base font-normal pt-2 pb-2">{description}</p>
      <hr />
      <p className="text-lg font-medium pt-2 pb-2">
        Ingredients: {ingredients.length}{" "}
      </p>
      {/* <ul className=''>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
            </ul> */}
      <ul className="p-2 pb-6 text-base font-normal">
        {ingredients.map((i) => (
          <li key={i.id}> • {i} </li>
        ))}
      </ul>
      <hr className="border-dotted" />
      <div className="flex justify-around p-4">
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaClock />
          </div>
          <div>{preparing_time}</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaFireFlameCurved />
          </div>
          <div>{calories}</div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={() => handleWantToCook(food)}
          className="btn btn-active btn-accent rounded-full"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func,
};

export default Food;
