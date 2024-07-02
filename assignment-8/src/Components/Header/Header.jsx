import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const Links = (
    <>
      <li>
        <NavLink to="/">
          <span className="text-lg font-medium">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/listedbooks">
          <span className="text-lg font-medium">Listed Books</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/pageRelode">
          <span className="text-lg font-medium">Pages to Read</span>
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/extra">
          <span className="text-lg font-medium">About US</span>
        </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/joinus" ><span className="text-lg font-medium">Join Us</span></NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal pl-24"> {Links} </ul>
      </div>
      <div className="navbar-end mr-4">
        <a className="btn bg-[#23BE0A] text-white">Apply</a>
      </div>
      <div className="navbar-center">
        <a className="btn bg-[#59C6D2] text-white">SignUp</a>
      </div>
    </div>
  );
};

export default Header;
