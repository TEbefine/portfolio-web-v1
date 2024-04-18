import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../components/homepage";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "pageOne", element: <PageOne /> },
  { path: "pageTwo", element: <PageTwo /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
