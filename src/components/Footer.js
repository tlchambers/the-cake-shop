import React from "react";
import "../Styling/Footer.css";

function Footer() {
  return (
    <>
      <div className=".container-fluid">
        <footer className="text-lg-start bg-white">
          <div className="row mt-3 text-center  justify-content-center align-items-start">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 className="sub-heading">
                <i className="text-secondary"></i>BOUJIE DELIGHTS
              </h6>
              <p>
              Step into the world of Boujie Delights, where every cake, cupcake, and treat is lovingly handmade in Brockley, South East London. Our bespoke creations are not only visually stunning, but also bursting with flavor, ensuring that every bite is as unforgettable as the occasion itself. Whether you're celebrating a birthday, wedding, or any special occasion, we work closely with you to craft a unique and personalized creation that perfectly matches your vision and needs.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
              <h6 className="sub-heading">Products</h6>
              <p>
                <a href="/cakes" className="text-reset">
                  Bespoke Cakes
                </a>
              </p>
              <p>
                <a href="/treats" className="text-reset">
                  Bespoke Treats
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
              <h6 className="sub-heading">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing Guide
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4">
              <h6 className="sub-heading">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary"></i> Brockley,
                South East London
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>{" "}
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                567 88
              </p>
              <p>
                <a
                  href="https://www.instagram.com/boujiedelights_/"
                  role="button"
                >
                  <i className="fab fa-instagram me-3 text-secondary"></i>{" "}
                  @BoujieDelights
                </a>
              </p>
            </div>
          </div>

          <div className="text-center p-4">
            © 2023 BoujieDelights.com
            {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              BoujieDelights.com
          </a> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;