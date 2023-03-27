import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import '../Styling/App.css';
// import Footer from "../Footer";
// import HeroSection from '../HeroSection';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className=".carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://withjoy.com/blog/wp-content/uploads/2019/11/jasmine-bartel-8LtrMQfeDkQ-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5418a5bae4b0877352524377/1486353082473-QEGG1Z3EVP8TQJ079TD8/image-asset.jpeg?format=1500we"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    {/* <div>
    <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"></img>
    <div className="text-container">
      <h1>Dreamy Cakes</h1>
      <h5>All the cakes are handmade daily and can be delivered within London.</h5>
    </div>
    </div> */}
    </>
  );
}

export default Home;