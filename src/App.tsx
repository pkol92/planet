import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/context";
import RequireAuth from "./components/Authorization/component";
import { PlanetsData } from "./components/PlanetsData/component";
import NotFoundPage from "./components/NotFoundPage/component";
import LoginPage from "./components/Login/component";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />}></Route>
					<Route
						path="/data"
						element={
							<RequireAuth>
								<PlanetsData />
							</RequireAuth>
						}
					></Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
