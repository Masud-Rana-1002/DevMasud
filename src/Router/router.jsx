import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>404</div>,
    children:[
      {
        
      }
    ]
  },
]);