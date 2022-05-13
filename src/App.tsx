import React from 'react';
import './App.css';
import Login from './components/Login/component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { AuthProvider } from './components/Authorization/context';
import RequireAuth from './components/Authorization/requireAuth';
import { PlanetsData } from './components/PlanetsData/component';
import NotFoundPage from './components/NotFoundPage/component';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/planets" element={
              <RequireAuth>
                <PlanetsData/>
              </RequireAuth>
            }>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
