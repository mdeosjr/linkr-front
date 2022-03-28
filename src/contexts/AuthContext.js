import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);
  const [attPage, setAttPage] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth, attPage, setAttPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
