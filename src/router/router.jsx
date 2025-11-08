import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";


const router = new createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
])

export default router;