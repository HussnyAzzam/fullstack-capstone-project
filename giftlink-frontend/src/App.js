import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.location.href = '/home.html';
    }
  }, [location]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={null} /> 
        <Route path="/app" element={<MainPage />} />
        <Route path="/app/login" element={<LoginPage/>} />
        <Route path="/app/register" element={<RegisterPage />} />
        <Route path="/app/product/:productId" element={<DetailsPage/>} />
        <Route path="/app/search" element={<SearchPage/>} />
        <Route path="/app/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
