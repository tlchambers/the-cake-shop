import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="bg-light text-center ">
        <div class="container p-4">
          <section class="mb-4">
            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-twitter"></i>
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-google"></i>
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-instagram"></i>
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-github"></i>
            </a>
          </section>

          <section class="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section class="">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="sub-heading">Boujie Delights</h5>
                <p>Here at Boujie Delights you will find tasteful and visually pleasing freshly baked buttercream cakes, cupcakes and treats based in Brockley, South East London.</p>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">USEFUL LINKS</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      How To Order
                    </a>
                  </li>
                  <li>
                    <a href="/contact" class="text-dark">
                      Get In Touch
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">POLICY</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      REFUND POLICY
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Contact</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    Email
                  </li>
                  <li>
                    Telephone
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div class="text-center p-3">
          <a class="text-dark" href="https://mdbootstrap.com/">
            © 2020 Boujie Delights
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
