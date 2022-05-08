import { getSuggestedQuery } from "@testing-library/react";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import authProvider from "./provider";

interface User {
    name: string,
    password: string,
}

interface AuthContextType {
    user: User|null;
    signin: (user: User, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}
  
const AuthContext = createContext<AuthContextType>(null!);
  
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const hardUser: User = {
            name: "Astronaut",
            password: "Planet1",
    }

    let [user, setUser] = useState(() => {
        const storage = localStorage.getItem('user');
        if (storage) {
            const localUser: User = JSON.parse(storage);
            if (localUser.name === hardUser.name && localUser.password === hardUser.password) {
                return hardUser;
            } else {
                return null
            }
        } else {
            return null
        }
    });
    console.log(user);
    // let isLocalUser = () => {
    //     const storage = localStorage.getItem('user');
    //     if (storage) {
    //      const localUser: User = JSON.parse(storage);
    //     //  return localUser === hardUser? authProvider.signin(()=> setUser(localUser)) : setUser(null);
    //         if (localUser.name === hardUser.name && localUser.password === hardUser.password) {
    //             console.log("to samo");
    //             authProvider.islogin(() => {
    //                setUser(hardUser); 
    //             }); 
    //             // authProvider.signin(() => {
    //             //     setUser(hardUser);
    //             //     callback();
    //             //   })
    //         } else {
    //             console.log("inne")
    //             setUser(null)
    //         }
    //     } else {
    //         console.log("nie ma sklepu")
    //         return setUser(null)
    //     }
    //     console.log(user)
    // }

    // useEffect(() => {
    //     const lokal = JSON.parse(localStorage.getItem('user')!);
    //     setUser(hardUser);
    //     console.log(user);
    //     // if (storage) {
    //     //  const localUser: User = JSON.parse(storage);
    //     // //  return localUser === hardUser? authProvider.signin(()=> setUser(localUser)) : setUser(null);
    //     //     if (localUser.name === hardUser.name && localUser.password === hardUser.password) {
    //     //         console.log("to samo");
    //     //         authProvider.islogin(() => {
    //     //            setUser(hardUser); 
    //     //         }); 
    //     //         // authProvider.signin(() => {
    //     //         //     setUser(hardUser);
    //     //         //     callback();
    //     //         //   })
    //     //     } else {
    //     //         console.log("inne")
    //     //         setUser(null)
    //     //     }
    //     // } else {
    //     //     console.log("nie ma sklepu")
    //     //     return setUser(null)
    //     // }
    //     // console.log(user)
    //     // }
       
    //   },[]);

    let signin = (newUser: User, callback: VoidFunction) => {
      return authProvider.signin(() => {
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
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