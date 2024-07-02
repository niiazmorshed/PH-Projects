import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
const LocalStorageErBooks = ({ boi }) => {
  const {
    id,
    bookName,
    author,
    category,
    rating,
    tags,
    image,
    publisher,
    totalPages,
    yearOfPublishing,
  } = boi;
  return (
    <div className="flex m-6 p-6 gap-6">
      <div className="flex justify-center shadow-lg shadow-red-500/90">
        <img className="rounded-lg w-60" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-6 mb-4">{bookName}</h1>
        <h1 className="text-base font-medium mb-4">By : {author} </h1>
        <div className="flex gap-6 rounded-xl items-center mb-4">
          <h1 className="text-lg font-bold">Tags</h1>
          <h1 className="text-lg font-bold text-[#23BE0A]">
            {tags.map((i) => (
              <span key={i.id} className="mr-4 bg-slate-600 rounded-xl">
                {i}
              </span>
            ))}
          </h1>
          <div className="flex justify-center items-center align-middle gap-2">
            <FaLocationDot />
            <h1 className="text-base font-medium">
              Year of Publishing: {yearOfPublishing}
            </h1>
          </div>
        </div>
        <div className="flex gap-7 mb-4">
          <div className="flex align-middle items-center gap-2">
            <FaUserFriends />
            <h1 className="text-base  font-medium">Publisher : {publisher} </h1>
          </div>
          <div className="flex align-middle items-center gap-2">
            <TfiWrite />
            <h1 className="text-base  font-medium">
              Total Pages : {totalPages}
            </h1>
          </div>
        </div>
        <hr className="border-dashed" />
        <div className="flex justify-normal items-center align-middle mt-4 rounded-xl gap-6">
          <div className="text-[#328EFF] bg-blue-950 w-1/3 text-center flex justify-center text-lg items-center rounded-2xl h-16 ">
            Category: {category}
          </div>
          <div className="text-lg text-[#FFAC33] bg-yellow-950 w-1/3  flex justify-center items-center rounded-2xl h-16">
            Rating {rating}{" "}
          </div>
          <div>
            <NavLink to={`/click/${id}`}>
              {" "}
              <button className=" bg-green-600 text-lg text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

LocalStorageErBooks.propTypes = {
  boi: PropTypes.object.isRequired,
};
export default LocalStorageErBooks;
