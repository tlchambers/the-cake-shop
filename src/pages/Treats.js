import React from "react";
import "../Styling/Cakes.css";
// import "../../components/pages/Services";
// // import CardItem from "../CardItem";
import Banner from "../components/BannerUI";
import Cards from "../components/Cards";

function Treats() {
  return (
    <>
      <Banner
        title="Bespoke Handcrafted Treats"
        imgsrc="https://images.unsplash.com/photo-1586195830864-e4d9688815c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZSUyMHBvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        paragraph="Lush Cake mixture on a stick dipped in luxurious chocolate these beauties are hand made and will be wrapped and tied if needed."
      />
      <Cards />
    </>
  );
}

export default Treats;
