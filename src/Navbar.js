import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styling/Navbar.css";
import Logo from "./SabrinaLogo.PNG";
import { Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light fixed-top justify-content-center text-center">
        <div className=".container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/cakes">
                  BESPOKE CAKES
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/treats">
                  BESPOKE TREATS
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/price-guide">
                  PRICE GUIDE
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
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
