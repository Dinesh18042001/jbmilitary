import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Offcanvas } from 'bootstrap';

export default function MobileMenu() {
  const [isMedalsOpen, setIsMedalsOpen] = useState(false); // State to toggle Medals section

  const hideOffcanvas = () => {
    const offcanvasElement = document.getElementById('offcanvasExample');
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }

    // Remove the 'show' class and set display to 'none' for the backdrop
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.classList.remove('show');
      backdrop.style.display = 'none';
    }
  };

  // Function to toggle the Medals accordion
  const toggleMedalsAccordion = () => {
    setIsMedalsOpen(prevState => !prevState);
  };

  return (
    <>
      <div className="offcanvas offcanvas-end mobil_menu_wrapper d-lg-none d-block" tabIndex="-1" id="offcanvasExample"
           aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src="./assets/logo.png" alt="logo" className="img-fluid" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          {/* Home */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingHome">
              <Link to="/" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Home</Link>
            </h2>
          </div>

          {/* Shop */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingShop">
              <Link to="/shop" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Shop</Link>
            </h2>
          </div>

          {/* Medals - Accordion Section (Dropdown) */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingmedals">
              <button
                className={`accordion-button ${isMedalsOpen ? '' : 'collapsed'}`}
                type="button"
                onClick={toggleMedalsAccordion}
                aria-expanded={isMedalsOpen}
                aria-controls="flush-collapsemedals"
              >
                Medals
              </button>
            </h2>
            {isMedalsOpen && (
              <div id="flush-collapsemedals" className="accordion-collapse collapse show" aria-labelledby="flush-headingmedals"
                   data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div className="col">
                    <Link to="/customizemedal" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Customize Medal</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Boer War and WW1</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">WW2</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Korea</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Malaysia</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Vietnam</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Afghanistan & Iraq</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Current Military</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Police & Emergency Services</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">PMedal Accessories</div>
                    </Link>
                    <Link to="#" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                          onClick={hideOffcanvas}>
                      <div className="drop_content">Customize your Medal</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Upcoming Auctions */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingAuctions">
              <Link to="/upcomingauction" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Upcoming Auctions</Link>
            </h2>
          </div>

          {/* Selling */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSelling">
              <Link to="/selling" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Selling?</Link>
            </h2>
          </div>

          {/* Sold Items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSoldItems">
              <Link to="/solditems" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Sold Items</Link>
            </h2>
          </div>

          {/* About */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingAbout">
              <Link to="/aboutpage" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>About</Link>
            </h2>
          </div>

          {/* Contact */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingContact">
              <Link to="/contact" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>
                Contact <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
