import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

let AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<string | null>("");
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (_data: any) => {
    console.log(_data);

    try {
      // const response = await fetch("your-api-endpoint/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      // const res = await response.json();
      const res = { data: { user: "nam" }, token: "token", message: "msg" };
      if (res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
