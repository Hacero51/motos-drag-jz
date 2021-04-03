import React from 'react'
import { Carousel } from 'react-bootstrap';

import img1 from "../imagen/slider/1.jpg";
import img2 from "../imagen/slider/2.jpg";
import img3 from "../imagen/slider/3.jpg";
import img4 from "../imagen/slider/4.jpg";
import img5 from "../imagen/slider/5.jpg";
import img6 from "../imagen/slider/6.jpg";
import img7 from "../imagen/slider/7.jpg";
import img8 from "../imagen/slider/8.jpg";
import img9 from "../imagen/slider/9.jpg";
import img10 from "../imagen/slider/10.jpg";
import img11 from "../imagen/slider/11.jpg";
import img12 from "../imagen/slider/12.jpg";
import img13 from "../imagen/slider/13.jpg";
import img14 from "../imagen/slider/14.jpg";
import img15 from "../imagen/slider/15.jpg";

function Slider() {


  return (
    <div className="container">
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                height="500px"
                width="250px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                height="500px"
                width="250px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                height="500px"
                width="250px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img4}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img5}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img6}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img7}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img8}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img9}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img10}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img11}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img12}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img13}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img14}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img15}
                height="500px"
                width="250px"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
    </div>
  )
}

export default Slider