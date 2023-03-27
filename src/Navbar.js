import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./Styling/Navbar.css"
import Logo from "./sabrinaLogo.png"

function NavigationBar() {
  return (
    <>
      <div className=".navbar">
        {/* <Navbar bg="light" variant="light">
          <Container>
            <a href="/">
              <img src={Logo} alt="logo" height="200" />
            </a>
            <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cakes">Cakes</Nav.Link>
              <Nav.Link href="/treats">Treats</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cakes">Cakes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/treats">Treats</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/price">Price</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    </>
  );
}

export default NavigationBar;
