import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MissionsContainer from './components/pages/MissionsContainer';
import NotFound from './components/pages/NotFound';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/missions" element={<MissionsContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
