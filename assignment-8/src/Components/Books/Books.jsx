import { useEffect, useState } from "react";
import Bookcart from "../BookCart/Bookcart";


const Books = () => {
    const [book, setBook] = useState([]);


    useEffect( ()=>{
        fetch("books.json")
        .then((res)=> res.json())
        .then((data)=> setBook(data) )
    } ,[])


  return (
    <div className="mt-12 pt-12">
      <h2 className="flex justify-center items-end text-5xl font-bold">
        Books
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-12 ">
        {
            book.map((i)=> <Bookcart key={i.id} book={i} ></Bookcart> )
        }
      </div>

    </div>
  );
};

export default Books;
