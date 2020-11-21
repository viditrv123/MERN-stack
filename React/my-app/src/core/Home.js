import React from 'react';
import '../App.css';
import Base from './Base';
import './Base.css';
import {Carousel} from 'react-bootstrap';

export default function Home(){
    console.log("API Is",process.env.REACT_APP_BACKEND);
    return(
        <Base><div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/11.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/12.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/13.jpg')} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </Base>
    );
}
