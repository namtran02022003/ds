import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import PrivateRoute from "./protectRoutes";
import Layouts from "@/layouts";

const AppRouter: RouteObject[] = [
  {
    element: <App />,
    errorElement: <>err</>, //TODO: update err component
    children: [
      {
        path: "login",
        async lazy() {
          let About = await import("@/pages/login/index");
          return { Component: About.default };
        },
      },
      {
        element: (
          <Layouts>
            <PrivateRoute />
          </Layouts>
        ),
        children: [
          {
            path: "about",
            async lazy() {
              let page = await import("@/pages/About");
              return { Component: page.About };
            },
          },
          {
            path: "/",
            async lazy() {
              let page = await import("@/pages/topPage/index");
              return { Component: page.default };
            },
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(AppRouter);

export { router };
