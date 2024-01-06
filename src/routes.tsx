import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./view/Root";
import { Home } from "./view/Home";
import { Search } from "./view/Search";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
