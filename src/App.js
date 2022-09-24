import './App.css';
import React from 'react';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Navbar from './components/Navbar';

function App() {
  return ( 
    <>
  <div> 
    <Navbar />
  </div> 
  <ImageSlider slides={SliderData} /> 

  </>
   );
}

export default App;