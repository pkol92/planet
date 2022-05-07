import React from 'react';
import './App.css';
import Login from './components/Login/component';
import Table from './components/Table/component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './components/Authorization/context';
import RequireAuth from './components/Authorization/requireAuth';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/planets" element={
              <RequireAuth>
                <Table/>
              </RequireAuth>
            }>
            </Route>
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
