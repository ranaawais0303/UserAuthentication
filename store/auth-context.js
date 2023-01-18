import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  function authenticate(token) {
    setAuthToken(token);
  }
  function logout() {
    setAuthToken(null);
  }
  const value = {
    token: authToken,
    // !!conver into boolean give the same result as token if token then true if not then false.
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
export const useAuth = () => useContext(AuthContext);
