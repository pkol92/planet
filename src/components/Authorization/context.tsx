import React, { createContext, ReactNode, useState } from "react";
import authProvider from "./provider";

interface User {
    name: string,
    password: string,
}

interface AuthContextType {
    user: User;
    signin: (user: User, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}
  
const AuthContext = createContext<AuthContextType>(null!);
  
const AuthProvider = ({ children }: { children: ReactNode }) => {
    let [user, setUser] = useState<any>(null);
  
    let signin = (newUser: User, callback: VoidFunction) => {
      return authProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };
  
    let signout = (callback: VoidFunction) => {
      return authProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };