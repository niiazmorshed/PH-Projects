import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/LocalStorage";
import LocalStorageErBooks from "../LocalStorageErBooks/LocalStorageErBooks";

const ListedBooksNav = () => {
  const book = useLoaderData();
  const [storedBooks, setStoredBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    if (book.length > 0) {
      const bookStored = book.filter((i) => storedBookIds.includes(i.id));
      setStoredBooks(bookStored);
    }
  }, []);
  const house = getStoredBooks("ReadList");
  const bari = getStoredBooks("WishList");

  const handleNumberOfPage = () => {
    console.log("Lagche");
  };

  return (
    <div>
      <div className=" mt-12 bg-slate-500 text-white w-full  min-h-28 flex justify-center items-center rounded-2xl">
        <h1 className="text-3xl font-bold text-center">
          Books You Have Listed
        </h1>
      </div>
      <div className="flex justify-center items-center mt-6">
        <details className="dropdown">
          <summary className="m-1 btn text-[#23BE0A] text-2xl">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a onClick={() => handleNumberOfPage()}>Number Of Pages</a>
            </li>
            <li>
              <a>Publish Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-12">
        <div role="tablist" className="tabs tabs-boxed ">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab  mr-4 text-2xl font-semibold "
            aria-label="Read List"
            checked
          />
          <div role="tabpanel" className="tab-content p-10">
            <div>
              {house.map((i) => (
                <LocalStorageErBooks key={i.id} boi={i}></LocalStorageErBooks>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-semibold  "
            aria-label="Wish List "
            
          />
          <div role="tabpanel" className="tab-content p-10">
            <div>
              {bari.map((i) => (
                <LocalStorageErBooks key={i.id} boi={i}></LocalStorageErBooks>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListedBooksNav.propTypes = {
  book: PropTypes.object.isRequired,
};
export default ListedBooksNav;
