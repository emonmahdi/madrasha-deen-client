import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import PrivateRoute from "../routes/PrivateRoute";
import AdmissionForm from "../components/Admission/AdmissionForm";
import AdmissionDetails from "../components/Admission/AdmissionDetails";
import AddClassForm from "../components/Admission/AddClassForm";
import MyAdmissions from "../pages/Dashboard/MyAdmission";
import AllAdmission from "../pages/Dashboard/AllAdmission";

const router = new createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      // {
      //   path: "/admission-details/:id",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/classes/${params.id}`),
      //   Component: AdmissionDetails,
      // },
      {
        path: "/admission-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
        Component: AdmissionDetails,
      },
      {
        path: "/admission-form/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
        element: (
          <PrivateRoute>
            <AdmissionForm />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-class",
        Component: AddClassForm,
      },
      {
        path: "my-admission",
        Component: MyAdmissions,
      },
      {
        path: "all-admission",
        Component: AllAdmission,
      },
    ],
  },
]);

export default router;