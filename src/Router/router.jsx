import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Details from "../components/MyProjects/Details";
import Home from "../components/Home/Home";
import MyCourses from "../page/MyCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>404</div>,
   children: [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/details/:id",
      element: <Details></Details>,
      
    },
    {
      path: "/courses",
      element: <MyCourses></MyCourses>

    },
   ]
  },
]);