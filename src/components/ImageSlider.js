import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const Button = styled.button`
  background-color: white;
  color: white;
  font-size: 0px;
  padding: 0px 0px;
  border-radius: 0px;
  margin: 0px 0px;
  cursor: pointer;
  opacity: 0;
`;
  return (
      
    <section className='slider'>
         
      <Button className='left-arrow' onClick={prevSlide} />
      <Button className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
    
  );
};

export default ImageSlider;