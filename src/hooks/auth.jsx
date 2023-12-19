import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@notes-front:user", JSON.stringify(user));
      localStorage.setItem("@notes-front:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token })
      
    } catch (errror) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@notes-front:token");
    const user = localStorage.getItem("@notes-front:user");

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);
   
  return(
    <AuthContext.Provider value={{ signIn, user: data.user }} >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };