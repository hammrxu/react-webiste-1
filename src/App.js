import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import Project01 from './components/projects/Project01.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          {/* <Route path='/projects/project01' element={<Project01 />}></Route> */}
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
