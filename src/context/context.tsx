import React, { createContext, ReactNode, useState } from "react";
import authProvider from "./provider";

interface User {
	name: string;
	password: string;
}

interface AuthContextType {
	user: User | null;
	hardUser: User;
	signin: (user: User, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const hardUser: User = {
		name: "Astronaut",
		password: "Planet1",
	};

	let [user, setUser] = useState(() => {
		const storage = localStorage.getItem("user");
		if (storage) {
			const localUser: User = JSON.parse(storage);
			if (
				localUser.name === hardUser.name &&
				localUser.password === hardUser.password
			) {
				authProvider.isAuthenticated = true;
				return hardUser;
			} else {
				return null;
			}
		} else {
			return null;
		}
	});

	let signin = (newUser: User, callback: VoidFunction) => {
		return authProvider.signin(() => {
			setUser(newUser);
			localStorage.setItem("user", JSON.stringify(newUser));
			callback();
		});
	};

	let signout = (callback: VoidFunction) => {
		return authProvider.signout(() => {
			setUser(null);
			localStorage.removeItem("user");
			callback();
		});
	};

	let value = { user, signin, signout, hardUser };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
