import { createBrowserRouter, RouterProvider as Provider } from "react-router-dom";

import { Root } from "../view/Root";
import { Home } from "../view/Home";
import Search from "../view/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/search',
        element: <Search/>
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <Provider router={router} />
}