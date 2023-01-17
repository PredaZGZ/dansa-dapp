import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//import PrivateRoute from './Helpers/PrivateRoute';

//Pages
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

export default function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Router>
      </div>
  );
}
