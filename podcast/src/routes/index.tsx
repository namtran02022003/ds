import App from "@/App";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
// function Ad() {
//   return (
//     <>
//       <h1>dsdsdsdsd</h1>
//       <Outlet />
//     </>
//   );
// }
const AppRouter: RouteObject[] = [
  {
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
      {
        path: "/",
        async lazy() {
          let About = await import("@/pages/topPage/index");
          return { Component: About.default };
        },
      },
    ],
  },

  // {
  //   path: "abc",
  //   element: <Ad />,
  //   errorElement: <>dfd</>,
  //   children: [
  //     {
  //       path: "x",
  //       async lazy() {
  //         let About = await import("@/pages/About");
  //         return { Component: About.About };
  //       },
  //     },
  //   ],
  // },
  {
    path: "login",
    async lazy() {
      let About = await import("@/pages/login/index");
      return { Component: About.default };
    },
  },
];
const router = createBrowserRouter(AppRouter);

export { router };
