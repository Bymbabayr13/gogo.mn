import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    const user = localStorage.getItem("local");
    if (user) {
      const email = user.split(":")[0];
      setCurrentUser({
        email,
        isAuthenticated: true,
      });
    }
    if (currentUser.isAuthenticated) {
    }
  }, []);
  console.log(currentUser);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
