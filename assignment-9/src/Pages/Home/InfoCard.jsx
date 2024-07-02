import { FaRegStar } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const InfoCard = ({ info }) => {
  const {
    id,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image,
    ratings,
  } = info;
  return (
    <div
      
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" sm: p-4 sm: m-4 card bg-base-100 shadow-lg shadow-red-700/50"
    >
      <figure>
        <img src={image} />
      </figure>
      <div>
        <div className="pl-4 my-2 ">
          <h2 className="text-3xl font-semibold">{estate_title}</h2>
          <div className="flex justify-between p-2">
            <h1>{location}</h1>
            <p className="text-green-600 font-medium ">{status}</p>
          </div>
        </div>
        <div className="flex p-4 justify-between">
          <div className="text-xl font-normal">
            <p>
              {" "}
              {segment_name}, {area}
            </p>
          </div>
          <div className="flex items-center gap-2 align-middle">
            <FaRegStar className="text-xl"></FaRegStar>
            <p className="font-bold">{ratings}</p>
          </div>
        </div>
        <ul className="p-2 pb-6 font-normal text-lg">
          {facilities.map((i) => (
            <li key={i.id}> • {i} </li>
          ))}
        </ul>
        <hr className="border-dashed" />
      </div>
      <div className="flex items-center justify-between p-4">
        <p>
          from{" "}
          <span className="text-yellow-700 font-extrabold text-xl">
            {price}
          </span>
          /night
        </p>
        <NavLink to={`/card/${id}`}>
          <button className="btn btn-outline btn-accent">View Property</button>
        </NavLink>
      </div>
    </div>
  );
};

export default InfoCard;
InfoCard.propTypes = {
  children: PropTypes.node,
};
