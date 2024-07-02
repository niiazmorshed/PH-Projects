import { VscAccount } from "react-icons/vsc";
const Header = () => {
  return (
    
    <section className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 pb-12">
        <div className="navbar-start">
          <a className="text-4xl btn btn-ghost">Handi Karai<span className="text-yellow-800">!</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li></li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button className="text-2xl btn btn-circle btn-outline bg-[#0be58a] text-gray-800">
            <VscAccount />
          </button>
        </div>
      </div>
      {/* Banner */} 
      <section className="banner"> 
        <section className="pt-24">
          <div className="flex flex-col justify-center text-center items-center gap-6 pt-6">
            <h1 className="text-5xl text-white font-extrabold w-3/5 text-center leading-snug">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="font-normal text-white text-lg w-1/2">
              Discover Delectable Delights at Handi Karai <br />
              Your test is our first priority
            </p>
            <div className="flex gap-6">
              <button className="btn btn-success rounded-full">
                Explore Now
              </button>
              <button className="btn btn-outline btn-primary rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Header;
