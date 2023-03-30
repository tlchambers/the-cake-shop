import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Styling/Navbar.css";
import Logo from "./SabrinaLogo.PNG";
import { Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top text-center">
        <div className=".container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cakes">
                  CAKES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/treats">
                  TREATS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/price-guide">
                  PRICE GUIDE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
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
