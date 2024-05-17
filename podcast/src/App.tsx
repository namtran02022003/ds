import { Outlet } from "react-router-dom";
import "@/assets/styles/global.scss";
import AuthProvider from "./hooks/auth/AuthProvider";
export default function App() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
