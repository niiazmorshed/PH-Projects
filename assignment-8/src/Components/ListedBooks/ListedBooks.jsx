import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getStoredBooks, saveBooks } from "../../Utility/LocalStorage";
const ListedBooks = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((i) => i.id === idInt);

  const handleApply = (book) => {
    const previousV = getStoredBooks("ReadList");
    const findBookstate = previousV.find((item) => item.id === book.id);
    if (!findBookstate) {
      toast("Added This Book to Your Read List");
      saveBooks(book, "ReadList");
    } else {
      toast("Warning!!! Already Added This Book to Your Read List");
    }
  };

  const handleWishlist = (book) => {
    const PreviousV = getStoredBooks("WishList");
    const PreviousReadlist = getStoredBooks("ReadList");
    const findReadlist = PreviousReadlist.find((item) => item.id === book.id);
    const findBook = PreviousV.find((item) => item.id === book.id);
    if (!findBook && !findReadlist) {
      toast("Added This Book to Your Wish List");
      saveBooks(book, "WishList");
    } else {
      toast("Warning!!! Data Already Saved in ReadList");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10 mt-12 p-6 pt-6 pb-6  rounded-xl bg-slate-700 ">
      <div className="shadow-lg shadow-red-500/50  ">
        <img
          className="  shadow-lg shadow-purple-500/50"
          src={book.image}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-4">{book.bookName}</h1>
        <p className="text-xl font-medium mb-4">By : {book.author} </p>
        <hr className="border-dashed" />
        <p className="text-xl font-medium mt-4 mb-4"> {book.category} </p>
        <hr className="border-dashed" />
        <p className="text-xl font-bold mt-4">
          <span className=" text-xl">Review :</span>{" "}
          <span className="text-base font-normal">{book.review}</span>{" "}
        </p>
        <div className="flex justify-start gap-6 mt-10 mb-6">
          {" "}
          <h1 className="text-xl font-bold">Tags :</h1>
          {book.tags.map((i) => (
            <span
              className="text-xl text-[#23BE0A] rounded-2xl bg-slate-600 w-32 text-center"
              key={i.id}
            >
              #{i}
            </span>
          ))}
        </div>
        <hr className="border-dashed" />
        <div className="grid grid-cols-2 mt-6 mb-6">
          <div className="text-xl font-medium">
            <h1>Number of Pages :</h1>
            <h1> Publisher :</h1>
            <h1>Year of Publishing :</h1>
            <h1>Ratings :</h1>
          </div>
          <div className="text-lg font-bold">
            <h1>{book.totalPages}</h1>
            <h1>{book.publisher}</h1>
            <h1>{book.yearOfPublishing}</h1>
            <h1>{book.rating}</h1>
          </div>
        </div>

        <div className="gap-6">
          <button
            onClick={() => handleApply(book)}
            className="text-xl font-bold btn btn-active btn-accent mr-4 bg-white "
          >
            Read
          </button>
          <button
            onClick={() => handleWishlist(book)}
            className=" text-lg font-bold btn btn-active btn-accent bg-[#50B1C9]"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

ListedBooks.propTypes = {
  book: PropTypes.object.isRequired,
};
export default ListedBooks;
