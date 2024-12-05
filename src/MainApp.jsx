import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import App2 from './App2'; 
import App3one from './App3one'; 
import App4 from './App4'; 
import Loginpage from './Loginpage';
import Address from './Address';
import Categoriespage from './Categoriespage';
import Manageaccount from './Manageaccount'; 
import App6 from './App6';
import Bag from './Bag';
import Demo from './demo';
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App2 />} />
        <Route path="/customer/create" element={<App3one />} /> 
        <Route path="/designer/create" element={<App3one />} />
        <Route path="/login1" element={<Loginpage />} />
        <Route path="/dashboard" element={<App4 />} />
        <Route path="/address" element={<Address />} />
        <Route path="/categories" element={<Categoriespage />} />
        <Route path="/manageaccount" element={<Manageaccount />} />
        <Route path="/app6" element={<App6 />}/>
        <Route path="/bag" element={<Bag />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/app4" element={<App4 />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
