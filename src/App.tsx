import React from 'react';
import './App.css';
import Login from './components/Login/component';
import Table from './components/Table/component';

function App() {
  return (
    <div className="App">
        <p>Planet app</p>
        <Login />
        <Table/>
    </div>
  );
}

export default App;
