import React from "react";
import "../Styling/Cakes.css";
// import "../../components/pages/Services";
// // import CardItem from "../CardItem";
import Banner from "../components/BannerUI";
import Cards from "../components/Cards";
import "../Styling/Pricing.css"

function Treats() {
  return (
    <>
      <Banner
        title="Price Guide"
        imgsrc="https://images.unsplash.com/photo-1586195830864-e4d9688815c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZSUyMHBvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        paragraph="Lush Cake mixture on a stick dipped in luxurious chocolate these beauties are hand made and will be wrapped and tied if needed. Whether you're celebrating a birthday or any special
        occasion, we work closely with you to craft a unique and
        personalized creation that perfectly matches your vision and
        needs."
        button="View Price List"
      />
      <div class=".container-fluid ">
        <div class=".row .no-gutters">
          <div className="background-image1">
          <div class="col justify-content-center">
            <h3>PRICE GUIDE</h3>
          </div>
          </div>
        </div>
        <div class=".row .no-gutters">
          <div className="background-image2">
          <div class="col">
          <h3>CAKE PRICING</h3></div>
          </div>
        </div>
        <div class=".row .no-gutters">
          <div className="background-image3">
          <div class="col">
          <h3>CUPCAKE PRICING</h3></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Treats;
