import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Card from "../Pages/Home/Card";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/Update Profile/UpdateProfile";
import WeAre from "../Pages/We Are/WeAre";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/info.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/card/:id",
        element: (
          <PrivateRoutes>
            <Card></Card>
          </PrivateRoutes>
        ),
        loader: () => fetch("/info.json"),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/weare",
        element: (
          <PrivateRoutes>
            <WeAre></WeAre>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
