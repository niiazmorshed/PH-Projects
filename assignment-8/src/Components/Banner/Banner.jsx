import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex mt-12 rounded-lg">
            <div className="w-2/3 flex justify-center items-center flex-col gap-6">
                <h1 className="  text-center text-6xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                <div>
                <NavLink to="/listedbooks"><button className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#23BE0A] text-white">View The List</button></NavLink>   
                </div>
            </div>
            <div className="w-1/3">
                <img className="w-96 rounded-lg" src={"https://i.ibb.co/hCZ0WNR/charlesdeluvio-Rpt-CBEAYtdc-unsplash.jpg"} alt="" />
            </div>
        </div>
    );
};

export default Banner;