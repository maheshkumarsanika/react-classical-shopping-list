import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ShoppingListPage from "./pages/shopping-list.page";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Categories from "./pages/categories.page";
import HomePage from "./pages/home.page";
import DateRangePage from "./pages/date-range.page";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ShoppingListPage />,
//   },
//   {
//     path: "/categories",
//     element: <Categories />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ShoppingListPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/date-range" element={<DateRangePage />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
