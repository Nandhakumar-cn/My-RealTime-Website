import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "C:/My-React-Project/Real-Time-Website/web/src/Images/r1.jpeg"
import slide2 from "C:/My-React-Project/Real-Time-Website/web/src/Images/native2.png"
import slide3 from "C:/My-React-Project/Real-Time-Website/web/src/Images/native4.png";





export default function Reactslide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          height="550px"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={slide2}
          height="550px"
          alt="Second slide"
        />

        <Carousel.Caption>
   
          <h3 class="text-secondary">“Make it work, make it right, make it fast.”</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={slide3}
          height="550px"
          alt="Third slide"
        />

        <Carousel.Caption>
      
          <h3 class="text-primary">
          “Before software can be reusable it first has to be usable.” .
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

