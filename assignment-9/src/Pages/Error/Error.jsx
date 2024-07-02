import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-12">
        <h1 className="text-6xl">404 route/not found page.</h1>
      </div>
      <NavLink to="/">
        <button className=" text-3xl btn btn-outline btn-accent">
          Back To Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
