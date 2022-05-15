import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Authorization/context";
import RequireAuth from "./components/Authorization/requireAuth";
import { PlanetsData } from "./components/PlanetsData/component";
import NotFoundPage from "./components/NotFoundPage/component";
import LoginPage from "./components/Login/component";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/planet/" element={<LoginPage />}></Route>
					<Route
						path="/planet/data"
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
