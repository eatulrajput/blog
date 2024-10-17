import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar'; // Import Navbar
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Add the Navbar component here */}
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/about" element={<h2>About Us</h2>} />
          <Route path="/contact" element={<h2>Contact Us</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
