import React from 'react';
import { Link } from "react-router-dom";
import { Offcanvas } from 'bootstrap';


export default function MobileMenu() {

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
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="/" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Home</Link>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="/productdetails" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Shop</Link>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingmedals">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsemedals" aria-expanded="false" aria-controls="flush-collapsemedals">
                Medals
              </button>
            </h2>
            <div id="flush-collapsemedals" className="accordion-collapse collapse" aria-labelledby="flush-headingmedals"
                 data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <div className="col">
                  <Link to="/customizemedal" className="drop-link d-flex align-items-center text-decoration-none text-dark"
                        onClick={hideOffcanvas}>
                    <div className="drop_content">Customize Medal</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="#" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Upcoming Auctions</Link>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="#" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Selling?</Link>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="#" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>Sold Items</Link>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="#" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>About</Link>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <Link to="#" className="accordion-button accordion-button-2" onClick={hideOffcanvas}>
                Contact <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
