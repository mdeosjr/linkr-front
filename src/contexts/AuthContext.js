import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);
  console.log(auth);

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
}

export default AuthContext;
