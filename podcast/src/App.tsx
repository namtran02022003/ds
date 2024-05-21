import { Outlet } from "react-router-dom";
import "@/assets/styles/global.scss";
import AuthProvider from "./hooks/auth/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/stores";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <Outlet />
        <Toaster />
      </AuthProvider>
    </ReduxProvider>
  );
}
