import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import PrivateRoute from './Helpers/PrivateRoute';

//Pages
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

//Recordar Probar AUTH "/" -> Private route y funciona

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>
      </Router>
    </div>
  );
}
