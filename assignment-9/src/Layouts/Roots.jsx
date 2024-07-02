import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Roots = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-montserrat border">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="mt-20 font-montserrat">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
