import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, AuthPage, HomePage } from "./imports.js";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <AuthPage type={true} /> },
      { path: "/signup", element: <AuthPage type={false} /> },
      { path: "/about", element: <About /> },
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
