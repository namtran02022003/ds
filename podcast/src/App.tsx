import Layouts from "./layouts/index";
import { Outlet } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
}
