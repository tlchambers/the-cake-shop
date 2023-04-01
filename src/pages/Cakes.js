import React from "react";
import "../Styling/Cakes.css";
// // import CardItem from "../CardItem";
import Banner from '../components/BannerUI';
import Cards from "../components/Cards";

function Cakes() {
  return (
    <>
       <Banner
        title="Bespoke Handcrafted Cakes"
        imgsrc="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        paragraph="Boujie Delights specialises in creating bespoke cakes that are tailored to customers' specific needs. Offering a wide range of flavours, fillings, and decorations ensures that your cake perfectly matches your vision. Freshly baked buttercream cakes, cupcakes, and treats are not only delicious, but also visually pleasing. Located in Brockley, South East London. "
        paragraph2="Freshly baked buttercream cakes, cupcakes, and treats are not only delicious, but also visually pleasing. Located in Brockley, South East London. "
      />
      <Cards />
    </>
  );
}

export default Cakes;
