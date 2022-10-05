import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work01 from './components/works/Work01';
import Work02 from './components/works/Work02';
import Work03 from './components/works/Work03';
import Work04 from './components/works/Work04';
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
          <Route path='/works/f/01' element={<Work01 />}></Route>
          <Route path='/works/f/02' element={<Work02 />}></Route>
          <Route path='/works/f/03' element={<Work03 />}></Route>
          <Route path='/works/n/04' element={<Work04 />}></Route>

        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
