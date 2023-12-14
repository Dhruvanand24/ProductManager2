import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Logout from "../pages/Logout";
import TotalData from "../pages/TotalData";
import Orders from "../pages/Orders";
import Barcode from "../pages/Barcode";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <TotalData />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/barcode/:productId",
        element: <Barcode/>,
      }
      
      
    ],
  },
  {
    path: "/logout",
    element: <Logout/>
  }
]);

export default router;