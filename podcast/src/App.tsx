import { Outlet } from "react-router-dom";
import "@/assets/styles/global.scss";
import AuthProvider from "./hooks/auth/AuthProvider";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <AuthProvider>
      <Outlet />
      <Toaster />
    </AuthProvider>
  );
}
