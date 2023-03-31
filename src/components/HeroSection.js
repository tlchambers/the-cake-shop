import React from "react";
import "../Styling/HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <img
          src="https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="hero-image"
        />
        <div className="text-container">
          <small>Welcome To</small>
          <h1>Boujie Delights</h1>
          <a className="hero-btn" href="/cakes" role="button">
            EXPLORE CAKES
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
