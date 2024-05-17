import { useAuth } from "@/hooks/auth/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user: any = useAuth();
  console.log("user", user);
  if (!user?.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;
