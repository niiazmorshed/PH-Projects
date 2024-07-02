import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PageRelode from './Components/PageRelode/PageRelode';
import ListedBooksNav from './Components/ListedBooksNavbar/ListedBooksNav';
import LocalStorageErBooks from './Components/LocalStorageErBooks/LocalStorageErBooks';
import AboutUs from './Components/AboutUs/AboutUs';
import Error from './Components/Error/Error';
import JoinUs from './Components/Join Us/JoinUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/click/:id",
        element : <ListedBooks></ListedBooks>,
        loader : ()=> fetch("/books.json")
      },
      {
        path : "/pageRelode",
        element : <PageRelode></PageRelode>
      },
      {
        path : "/listedbooks",
        element : <ListedBooksNav></ListedBooksNav>,
        loader : ()=> fetch("/books.json") //Not a professional way
      },
      {
        path : "/clickread/:id",
        element : <LocalStorageErBooks></LocalStorageErBooks>,
      },
      {
        path : "/extra",
        element : <AboutUs></AboutUs>
      },
      {
        path : "/joinus",
        element : <JoinUs></JoinUs>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
