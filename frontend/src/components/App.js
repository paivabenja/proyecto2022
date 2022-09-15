import React from 'react';
import { NavbarComp } from './NavbarComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { Home } from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
