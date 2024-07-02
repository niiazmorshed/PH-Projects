import PropTypes from "prop-types";

import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Bookcart = ({ book }) => {
  const { bookName, author, category, rating, id, tags, image } = book;
  return (
    <NavLink to={`/click/${id}`}>
      <div>
        <div className="card card-compact bg-base-100 p-6  shadow-lg shadow-purple-500/50 ">
          <div className="flex justify-center">
            <img className=" h-80 rounded-lg" src={image} alt="Shoes" />
          </div>
          <div className="card-body">
            <div className="flex justify-start gap-6">
              {tags.map((i) => (
                <span
                  className="text-[#23BE0A]  rounded-xl bg-slate-600 text-center text-lg font-semibold"
                  key={i.id}
                >
                  #{i}
                </span>
              ))}
            </div>
            <h2 className="card-title text-2xl font-bold">{bookName}</h2>
            <h1 className="text-base font-medium"> By: {author} </h1>
          </div>
          <hr className="border-dotted" />
          <div className="flex justify-between mt-4">
            <p className="text-base font-medium"> {category} </p>
            <div className="flex items-center justify-center ">
              <CiStar className="text-2xl" />
              <p className="text-lg font-medium pb-1">{rating} </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

Bookcart.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Bookcart;
