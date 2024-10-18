import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import HeroSection from './components/HeroSection'; 
import About from './components/About'; // Import About component
import Contact from './components/Contact'; // Import Contact component
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navigation bar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection /> {/* Add the HeroSection on the home page */}
                <BlogList /> {/* Blog list will follow after hero section */}
              </>
            }
          />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Add the footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
