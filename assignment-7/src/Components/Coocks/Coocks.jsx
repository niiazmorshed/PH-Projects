import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import { useState } from "react";
import Cooking from "../Coocking/Cooking";
// import Time from "../Timing/Time";

const Coocks = ({ cooks, setCook }) => {
  const [cooking, setCooking] = useState([]);

  const handleCook = (i) => {
    const newCooking = [...cooking, i];
    setCooking(newCooking);
    const filtureData = cooks.filter(item => item.id!=i.id)
    setCook(filtureData)
  };

  return (
    <div className="w-1/3  bg-gray-600 p-4 m-4 rounded-xl">
      <h2 className="text-3xl text-center pb-4">Want To Cook {cooks.length}</h2>
      <hr />
      <div  className="flex justify-around text-center w-2/3 pl-6 gap-8 pt-4">
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Time</p>
        </div>
        <div>
          <p>Calories</p>
        </div>
      </div>
      {cooks.map((i) => (
        <Cook key={i.id} cook={i} handleCook={handleCook}></Cook>
      ))}

      <div className="mb-6 pb-6">
        <div className="flex justify-center items-center p-4">
          <h1 className="text-3xl">Currently Cooking : {cooking.length} </h1>
        </div>

        <hr />
        <div className="flex justify-around text-center gap-8 pt-4">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Time</p>
          </div>
          <div>
            <p>Calories</p>
          </div>
        </div>
        {cooking.map((i) => (
          <Cooking key={i.id} ranna={i}></Cooking>
        ))}
      </div>
      <hr />
      <div className="mt-12 flex justify-center items-center text-center gap-10">
        <h1>Total Time</h1>
        <h1>Total Calories</h1>
      </div>
      {/* {
        cooking.map(k => (
          <Time key={k.id} time={k}></Time>
        ))
      } */}
    </div>
  );
};

Coocks.propTypes = {
  cooks: PropTypes.array,
  setCook : PropTypes.func
};

export default Coocks;
