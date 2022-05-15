import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authorization/context";
import { Button, ErrorLogin, Header, Input, Login } from "../Styled/component";

const LoginPage = () => {
	const auth = useContext(AuthContext);
	let navigate = useNavigate();
	const [error, setError] = useState(false);

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	//check if user is already log in
	useEffect(() => {
		auth.user ? setUser(auth.user.name) : setUser("");
		auth.user ? setPassword(auth.user.password) : setPassword("");
	}, []);

	//check if data login are correct
	const handleLogin = () => {
		if (user === auth.hardUser.name && password === auth.hardUser.password) {
			auth.signin(auth.hardUser, () => navigate("/planet/data"));
		} else {
			setError(true);
		}
	};

	return (
		<div>
			<Header>
				<h2>Hello Astronaut!</h2>
				<h3>Log in to see information abut planets.</h3>
			</Header>

			<Login>
				<label htmlFor="login">
					<b>Username</b>
				</label>
				<Input
					type="text"
					placeholder="username"
					name="login"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				></Input>

				<label htmlFor="password">
					<b>Password</b>
				</label>
				<Input
					type="password"
					placeholder="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></Input>

				{error ? <ErrorLogin>Wrong login or password!</ErrorLogin> : null}

				<Button onClick={handleLogin}>Log in</Button>
			</Login>
		</div>
	);
};

export default LoginPage;
