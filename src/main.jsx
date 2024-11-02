import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import About from "./components/About/About";
import UserDetails from "./components/UserDetails/UserDetails";
import ErrorElement from "./components/ErrorElement/ErrorElement";

const router= createBrowserRouter(
  [
    {
      path:"/",
      element: <Home></Home>,
      errorElement:<ErrorElement></ErrorElement>,
     
      children: [
        {
          path:"/contact",
          element:<Contact></Contact>,
        },
        {
          path:"/users",
          element:<Users></Users>,
          loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
          
        },
        {
          path:"/about",
          element:<About></About>,
        },
        {
          path:"/user/:userId",
          loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<UserDetails></UserDetails>,
        },

      ]
    },
    
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
