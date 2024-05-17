import Layouts from "./layouts/index";
import { Outlet } from "react-router-dom";
import "@/assets/styles/global.scss";
export default function App() {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
}
