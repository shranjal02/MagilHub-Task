import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import SignInForm from './SignInForm';

function App() {
  return (
<Router>
  <nav>
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
  </nav>

  <Routes>
    <Route path="/register" element={<RegistrationForm />} />
    <Route path="/signin" element={<SignInForm />} />
    <Route path="/" element={<h1>Welcome to Registration App</h1>} />
  </Routes>
</Router>
  );
}

export default App;
