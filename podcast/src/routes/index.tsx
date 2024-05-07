import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";

const AppRouter: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <>err</>,
    children: [
      {
        path: "about",
        async lazy() {
          let About = await import("@/pages/About");
          return { Component: About.About };
        },
      },
    ],
  },
];
const router = createBrowserRouter(AppRouter);

export { router };
