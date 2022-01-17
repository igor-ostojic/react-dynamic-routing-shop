import React from "react";
import "./style.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ShopItem from './pages/ShopItem'


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/shop' element = {<Shop />} />
          <Route path='/shop/:id' element = {<ShopItem />} />
        </Routes> 
      </Router> 
    </div>
  );
}
