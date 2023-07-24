import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Colleges from "../pages/Colleges.jsx/Colleges";
import Admission from "../pages/Admission/Admission";
import CollegeInfo from "../pages/Shared/College/CollegeInfo/CollegeInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/colleges',
          element: <Colleges></Colleges>
        },
        {
          path: '/collegeInfo/:id',
          element: <CollegeInfo></CollegeInfo>
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
]);
