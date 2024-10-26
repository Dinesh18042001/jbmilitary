import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_banner position-relative">
          <img src="./assets/Banner/footer.webp" alt="" />
          <div className="inner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-xl-2 logo_bxs">
                  <div className="logo">
                    <img src="./assets/logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 col-xl-3">
                  <div className="menu_headin">
                    <h3>Navigation</h3>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                      <li>
                        <a href="#">Medal Mounting & Research</a>
                      </li>
                      <li>
                        <a href="#">Upcoming Auctions & Catalogues</a>
                      </li>
                      <li>
                        <a href="#">Absentee/Phone Bid Form</a>
                      </li>
                      <li>
                        <a href="#">Selling?</a>
                      </li>
                      <li>
                        <a href="#">Sold Items</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4">
                  <div className="menu_headin">
                    <h3>Contact Us</h3>
                    <ul className="contact_info">
                      <li>
                        <a href="#">
                          <span>
                            <i class="fas fa-phone-alt"> </i> T: +61 08 9276
                            5113
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i class="fas fa-mobile"></i> P: 0478 639 410
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i class="fas fa-envelope"></i>{" "}
                            jamey@jbmilitaryantiques.com.au
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i class="fas fa-map-marker-alt"></i> 2/135 Russell
                            St 6062, Morley, WA
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-3">
                  <div className="map_bx">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.2053899543166!2d115.89684137457746!3d-31.901016419844794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ba8fc3086fa1%3A0x7c7e6d35dad057dd!2sJB%20Military%20Antiques!5e0!3m2!1sen!2sin!4v1729925251534!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row bootom">
                  <div className="col-lg-6 col-xl-6">
                    <div className="copy-right">
                      <p>Copyright © <span>2024</span> ,Designed by <a href="#">Webpristine Technologies</a></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="bottom_menu">
                      <a href="#">Returns Policy</a>
                      <a href="#">Terms & Conditions</a>
                      <a href="#">Shipping & Dispatch Shop now on EBAY</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
