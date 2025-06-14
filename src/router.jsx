import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Instructions from './views/Instructions';
import Game from './views/Game';
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './components/Navbar/Navbar';

function Router(){
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/instructions" element={<Instructions/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default Router;

/*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import AboutUs from './views/AboutUs';
import Game from './views/Game';
import Home from './views/Home';
import Instructions from './views/Instructions';
import Login from './views/Login';
import Register from './views/Register';

function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/game" element={<Game/>}/>
            <Route path="/instructions" element={<Instructions/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;
*/