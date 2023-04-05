import React from "react";
import "../Styling/Pricing.css";
import { GiStrawberry, GiRaspberry, GiChocolateBar } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import { FaCookieBite } from "react-icons/fa";

function Treats() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-6 justify-content-center">
              <div className="text-hero-bold">PRICE GUIDE</div>
              <div className="text-hero-regular">
                When it comes to design, the sky is the limit! Whether you have
                a specific theme or color scheme in mind, or simply want
                something unique and eye-catching, Boujie Delights would love to
                create a cake that perfectly captures your vision.
              </div>
            </div>
            <div class="col-6">
              <img src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNsaWNlJTIwY2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />
            </div>
          </div>

          <div className="row justify-content-center no-gutters">
            <div className="col-6 d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNsaWNlJTIwY2FrZXxlbnwwfDB8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                className="rounded-circle img-fluid perfect-circle"
                alt="cake flavors"
              />
            </div>
            <div className="col-md-6 align-self-center d-flex flex-column">
              <div className="text-label align-self-center mb-3">
                Flavour Combinations
              </div>
              <div className="text-left">
                <ul className="text-center">
                  <li>Vanilla Sponge & Vanilla Buttercream</li>
                  <li>Oreo Sponge & Oreo Buttercream</li>
                  <li>Caramel Sponge & Biscoff Buttercream</li>
                  <li>Red Velvet Sponge & Vanilla Buttercream</li>
                  <li>Chocolate Sponge & Chocolate Buttercream</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row justify-content-center text-center no-gutters">
            <div class="col-md-6 align-self-center d-flex flex-column">
              <div className="text-label align-self-center mb-3">
                Cake Fillings
              </div>
              <div className="text-hero-regular">
                Boujie Delights uses the finest ingredients to create cakes that
                are both beautiful and delicious. From classic flavors like
                vanilla and chocolate, to more indulging options like lotus
                biscoff and caramel.
              </div>
              <ul class="text-center">
                <li class="d-flex align-items-center">
                  <span class="icon">
                    <GiStrawberry />
                  </span>
                  <span class="ml-2">Strawberry Jam</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="icon">
                    <GiRaspberry />
                  </span>
                  <span class="ml-2">Raspberry Jam</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="icon">
                    <BiCookie />
                  </span>
                  <span class="ml-2">Cookie & Creme</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="icon">
                    <GiChocolateBar />
                  </span>
                  <span class="ml-2">Caramel</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="icon">
                    <FaCookieBite />
                  </span>
                  <span class="ml-2">Lotus Biscoff</span>
                </li>
              </ul>
            </div>
            <div class="col-6 d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNsaWNlJTIwY2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
                class="rounded-circle img-fluid perfect-circle"
              />
            </div>
          </div>

          <div class="row justify-content-center text-center no-gutters">
            <div class="col-6 d-flex justify-content-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1675706599329-1bae6e5b36e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJ1dHRlcmNyZWFtJTIwY2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
                class="rounded-circle img-fluid perfect-circle"
              />
            </div>
            <div class="col-md-6 align-self-center d-flex flex-column">
              <div class="text-label align-self-start mb-3 text-center">
                Flavour Combinations
              </div>
              <ul class="justify-content-center">
                <li class="d-flex align-items-center">
                  Vanilla Sponge & Vanilla Buttercream
                </li>
                <li class="d-flex align-items-center">
                  Oreo Sponge & Oreo Buttercream
                </li>
                <li class="d-flex align-items-center">
                  Caramel Sponge & Biscoff Buttercream
                </li>
                <li class="d-flex align-items-center">
                  Red Velvet Sponge & Vanilla Buttercream
                </li>
                <li class="d-flex align-items-center">
                  Chocolate Sponge & Chocolate Buttercream
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Treats;
