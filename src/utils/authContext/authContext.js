import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  const contextValue = useMemo(() => {
    return {
      user,
      login,
      logout,
    };
  }, [user]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
