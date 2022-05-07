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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/planets" element={<Table/>}>
          
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
