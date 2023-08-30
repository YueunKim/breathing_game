import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default App;
