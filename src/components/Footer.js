import React from 'react';
import '../Styling/Footer.css';

function Footer() {
	return (
		<>
			<div className="container-fluid no-padding">
				<div className="footer-container">
					<footer className="text-center text-lg-start .bg-white text-muted">
						<div className="row mt-3 d-flex justify-content-around align-items-start">
							<div className="col-md-3 col-lg-3 col-xl-3 mb-3 center-text">
								<h6 className="sub-heading">BOUJIE DELIGHTS COMPANY</h6>
								<p>
									Step into the world of Boujie Delights, where every cake,
									cupcake, and treat is lovingly handmade in Brockley, South
									East London. Our bespoke creations are not only visually
									stunning, but also bursting with flavor, ensuring that every
									bite is as unforgettable as the occasion itself.
								</p>
							</div>
							<div className="col-md-3 col-lg-3 col-xl-3 mb-3 center-text">
								<h6 className="sub-heading">USEFUL LINKS</h6>
								<p>
									<a href="/collections" className="text-reset">
										Bespoke Cakes
									</a>
								</p>
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
							<div className="col-md-3 col-lg-3 col-xl-3 mb-3 center-text">
								<h6 className="sub-heading">POLICY</h6>
								<p>
									<a href="#!" className="text-reset">
										Refund Policy
									</a>
								</p>
							</div>

							<div className="col-md-3 col-lg-3 col-xl-3 mb-md-0 mb-3 center-text">
								<h6 className="sub-heading">CONTACT</h6>
								<p>
									<i className="fas fa-map-marker-alt me-3 text-secondary"></i>{' '}
									Brockley, South East London
								</p>
								<p>
									<i className="fas fa-envelope me-3 text-secondary"></i>{' '}
									beautifullybakedbyess@outlook.com
								</p>
								<p>
									<i className="fas fa-phone me-3 text-secondary"></i>{' '}
									07810237414
								</p>
								<p>
									<a
										href="https://www.instagram.com/boujiedelights_/"
										role="button"
									>
										<i className="fab fa-instagram me-3 text-secondary"></i>{' '}
										@beautifullybakedbyess
									</a>
								</p>
							</div>
						</div>

						<div className="text-center p-4">
							<hr />© 2023 Boujie Delights
							{/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              BoujieDelights.com
          </a> */}
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}

export default Footer;
