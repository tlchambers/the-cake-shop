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
        title="Price Guide"
        imgsrc="https://images.unsplash.com/photo-1586195830864-e4d9688815c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZSUyMHBvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        paragraph="Lush Cake mixture on a stick dipped in luxurious chocolate these beauties are hand made and will be wrapped and tied if needed. Whether you're celebrating a birthday or any special
        occasion, we work closely with you to craft a unique and
        personalized creation that perfectly matches your vision and
        needs."
        button="View Price List"
      />
      <div className="container px-4 text-left">
        <div className="row gx-6">
          <div className="col">
            <div className="p-3">
              <h3>Price List</h3>
              <hr></hr>
              <br />
              <p>
                My passion for baking started 2021 when I started baking cakes &
                treats for family and friends. This lead to me experimenting and
                having fun with making different types of cakes and treats such
                as chocolate covered strawberries, cakesicles, sugar cookies &
                chocolate smash hearts. Two years on and I now have my own
                buttercream cakes business specialising in occasion cakes for
                birthdays, anniversaries, christenings, baby and bridal showers,
                charity events & more.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Treats;
