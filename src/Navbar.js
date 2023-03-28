import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styling/Navbar.css";
import Logo from "./SabrinaLogo.PNG";
import { Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top text-center">
        <div class=".container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item active">
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
