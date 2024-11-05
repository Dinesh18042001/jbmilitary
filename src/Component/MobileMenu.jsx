import React from 'react'
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
   <>
    <div className="offcanvas offcanvas-end mobil_menu_wrapper d-lg-none d-block" tabindex="-1" id="offcanvasExample"
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
          <button className="accordion-button accordion-button-2" type="button">
            <Link to ="/">Home</Link>
          </button>
        </h2>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button accordion-button-2" type="button">
            <Link to ="#">Shop</Link>
          </button>
        </h2>
      </div>

      

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingfour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
              Medals
          </button>
        </h2>
        <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <div className="col">
              <Link to ="customizemedal" className="drop-link d-flex allign-items-center text-decoration-none text-dark">
                
                <div className="drop_content">
                Customize Medal
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button accordion-button-2" type="button">
          <Link to ="#"> Upcoming Auctions</Link>
          </button>
        </h2>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button accordion-button-2" type="button">
          <Link to ="#">Selling?</Link>
          </button>
        </h2>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button accordion-button-2" type="button">
            <Link to ="#">Sold Items</Link>
          </button>
        </h2>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button accordion-button-2" type="button">
            <Link to ="#">About</Link>
          </button>
        </h2>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button accordion-button-2" type="button">
          <Link to="contact">
                  Contact <i className="fa-solid fa-arrow-right"></i>
                </Link>
          </button>
        </h2>
      </div>
    </div>
  </div>

   </>
  )
}