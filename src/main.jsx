import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigation />,
//   },
//   {
//     path: "/generate",
//     element: <QrCodeGenerator />,
//   },
//   {
//     path: "/scan",
//     element: <QRCodeScanner />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
