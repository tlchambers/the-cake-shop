import React from "react";
import "../Styling/Cakes.css";
// import "../../components/pages/Services";
// // import CardItem from "../CardItem";
import Banner from "../components/BannerUI";
import Cards from "../components/Cards";
import "../Styling/Pricing.css";
import { GiStrawberry, GiRaspberry, GiChocolateBar } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import { FaCookieBite } from "react-icons/fa";

function Treats() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div class="row justify-content-start">
            <div class="col-md-12 bk-img align-self-center">
              <div className="text-hero-bold">PRICE GUIDE</div>
            </div>
            <div class="col-6 align-self-center">
              <div className="text-hero-regular">
                When it comes to design, the sky is the limit! Whether you have
                a specific theme or color scheme in mind, or simply want
                something unique and eye-catching, Boujie Delights would love to
                create a cake that perfectly captures your vision.
              </div>
            </div>
            <div class="col-6"></div>
          </div>

          <div class="row justify-content-start">
            <div class="col-md-6 align-self-center">
              <div className="text-label">Fillings</div>
              <ul>
                <li>
                  <GiStrawberry /> Strawberry Jam
                </li>
                <li>
                  <GiRaspberry /> Raspberry Jam
                </li>
                <li>
                  <BiCookie /> Cookie & Creme
                </li>
                <li>
                  <GiChocolateBar />
                  Caramel
                </li>
                <li>
                  <FaCookieBite /> Lotus Biscoff
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <img src="https://images.unsplash.com/photo-1619356070234-607a25a7171e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            </div>
            <div class="w-100"></div>
            <div class="col-md-6">
              <img src="https://images.unsplash.com/photo-1619356070234-607a25a7171e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            </div>
            <div class="col-md-6">
              <div className="text-label">Flavour Combinations</div>
              <ul>
                <li>Vanilla Sponge & Vanilla Buttercream</li>
                <li>Oreo Sponge & Oreo Buttercream</li>
                <li>Caramel Sponge & Biscoff Buttercream</li>
                <li>Red Velvet Sponge & Vanilla Buttercream</li>
                <li>Chocolate Sponge & Chocolate Buttercream</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col flavour-section-bg">
            <div className="text-hero-sub-heading">
              Boujie Delights uses the finest ingredients to create cakes that
              are both beautiful and delicious. From classic flavors like
              vanilla and chocolate, to more indulging options like lotus
              biscoff and caramel.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1619356070234-607a25a7171e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="col-md-6">
            <div>
              <div className="text-hero-sub-heading">Fillings</div>
              <div className="text-hero-regular">
                The following fillings are available to order:
                <ul>
                  <li>RASPBERRY JAM</li>
                  <li>STRAWBERRY JAM</li>
                  <li>HERSEY'S COOKIES N CREME</li>
                  <li>CARAMEL</li>
                  <li>LOTUS BISCOFFF</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1619356070234-607a25a7171e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="col-md-4">
            <div>
              <div className="text-label">What to say here...</div>
              <div className="text-hero-regular">shhsh</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Treats;
