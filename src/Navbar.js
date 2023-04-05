import "./Styling/Navbar.css";
import Logo from "./SabrinaLogo.PNG";

function NavigationBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top d-flex justify-content-center text-center">
        <a class="navbar-brand" href="/">
          <img src={Logo} alt="" />
        </a>
        <button
          class="navbar-toggler shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              HOME <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="/cake-collection">
              BESPOKE CAKE
            </a>
            <a class="nav-item nav-link" href="/price-guide">
              PRICE GUIDE
            </a>
            <a class="nav-item nav-link" href="/about">
              ABOUT
            </a>
            <a class="nav-item nav-link" href="/contact">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;

// <nav className="navbar navbar-expand-md bg-white fixed-top justify-content-center text-center">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             <img src={Logo} alt="" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   HOME
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a class="nav-link" href="/collections">
//                   BESPOKE CAKES
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a class="nav-link" href="/price-guide">
//                   PRICE GUIDE
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a class="nav-link" href="/about">
//                   ABOUT
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a class="nav-link" href="/contact">
//                   CONTACT
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
