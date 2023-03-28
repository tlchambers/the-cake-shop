import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styling/Navbar.css";
import Logo from "./SabrinaLogo.PNG";
import { Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cakes">
                  CAKES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/treats">
                  TREATS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/price-guide">
                  PRICE GUIDE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  CONTACT
                </a>
              </li>
            </ul>
            {/* <form class="d-flex mb-2 me-4" role="search">
            <input type="text" class="search-hover" name="" />
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
