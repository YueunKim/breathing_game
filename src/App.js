import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Rule from "./pages/rule";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Rule />,
    },
    {
      path: "/game",
      element: <Main />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default App;
