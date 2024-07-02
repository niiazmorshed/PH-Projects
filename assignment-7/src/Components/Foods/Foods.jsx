import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import PropTypes from "prop-types";

const Foods = ({ handleWantToCook}) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="w-2/3">
      <div className="food-container">
        {foods.map((i) => (
          <Food
            key={i.id}
            food={i}
            handleWantToCook={handleWantToCook}
          ></Food>
        ))}
      </div>
    </div>
  );
};

Foods.propTypes = {
  handleWantToCook: PropTypes.func,
};
export default Foods;
