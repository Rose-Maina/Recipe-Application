import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import UserReviews from './components/UserReviews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/UserReviews" element={<UserReviews />}></Route>
              <Route exact path="/Signup" element={<Signup />}></Route>
            </Routes>
      </Router>

    </div>
  );
}

export default App;
