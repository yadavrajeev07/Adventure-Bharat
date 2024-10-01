import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Services from './pages/Services';
import Products from './pages/Products';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import Signup from './pages/Signup';
import PhotoGallery from './pages/PhotoGallery';
import DashboardHome from './components/DashboardHome';
import Destinations from './components/Destinations';
import Trailer from './components/Trailer';
function App() {
  
  return (
      
    <>
    <Router>
    
    <Header />
   
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Login'element={<Login /> } />
          <Route path='/Signup'element={<Signup/> } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/PhotoGallery' element={<PhotoGallery />} />
          <Route path='/DashboardHome'element={<DashboardHome />} />
          <Route path='/Destinations' element={<Destinations />} />
          <Route path='/Trailer' element={<Trailer />} />
        </Routes>
        
      <Footer />
      
      </Router>
    </>
    
  );
}

export default App;
