import React from 'react';
import './App.css';
import Appheader from './component/Appheader';
import Homepage from './component/Homepage';
import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Appheader></Appheader>
    <Routes>
      <Route>
      <Route path="/Homepage" element={<Homepage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
