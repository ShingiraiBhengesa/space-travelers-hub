import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
