import './hero.css';
import Carousel from 'react-bootstrap/Carousel';
import Images from './image/Images';
import React from 'react'

const Hero = () => {
  return (
    <div>
      <Carousel className='top'>
      <Carousel.Item>
        <img className="w-100" src={Images.pic4} alt="First slide"/>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="w-100" src={Images.pic5} alt="Second slide"/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="w-100" src={Images.pic6} alt="Third slide"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Hero
