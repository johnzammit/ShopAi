import './App.css';
import React from 'react';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return ( 
  <>
    <div className="container">
    <div className="contentwrap">
    <Navbar />, 
    <ImageSlider slides={SliderData} /> 
    </div>
    <Footer/>
    </div>
  </>
   );
}

export default App;