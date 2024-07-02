import { useState } from "react";
import "./App.css";
import Coocks from "./Components/Coocks/Coocks";
import Foods from "./Components/Foods/Foods";
import Header from "./Components/Header/Header";
import Recepies from "./Components/Recepies/Recepies";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [cooks, setCook] = useState([]);

  const handleWantToCook = (i) => {
    const findObj = cooks.find((j) => j.id === i.id);
    if (findObj) {
      toast("You have already selected this recipe!");
    } else {
      const newCook = [...cooks, i];
      setCook(newCook);
    }
  };

  return (
    <>
      <ToastContainer />
      <Header></Header>
      <Recepies></Recepies>
      <div className="flex max-w-7xl mx-auto">
        <Foods handleWantToCook={handleWantToCook}></Foods>
        <Coocks cooks={cooks} setCook={setCook}></Coocks>
      </div>
    </>
  );
}

export default App;