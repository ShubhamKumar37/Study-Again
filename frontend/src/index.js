import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  AuthPage,
  ChangePassword,
  HomePage,
  ForgetPassword,
  VerifyEmail,
  Dashboard,
  PageNotFound,
} from "./imports.js";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { CourseBuilder, MyProfile, ProtectedRoute, Setting } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/*", element: <PageNotFound /> },
      { path: "/login", element: <AuthPage type={true} /> },
      { path: "/signup", element: <AuthPage type={false} /> },
      { path: "/about", element: <About /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      {
        path: "/update-password/:token",
        element: <ChangePassword flag={false} />,
      },
      { path: "/forget-password", element: <ForgetPassword /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            {" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/dashboard/my-profile",
            element: (
              <ProtectedRoute>
                {" "}
                <MyProfile />{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/setting",
            element: (
              <ProtectedRoute>
                {" "}
                <Setting />{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/add-course",
            element: (
              <ProtectedRoute>
                {" "}
                <CourseBuilder />{" "}
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
