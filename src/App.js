import './Styling/App.css'
import NavigationBar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cakes from "./pages/Cakes";
// import Treats from "./pages/Treats";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
          {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/cakes" element={<Cakes />} /> */}
          {/* <Route path="/treats" element={<Treats />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
