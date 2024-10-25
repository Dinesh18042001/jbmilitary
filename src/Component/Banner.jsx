import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Banner() {
  return (
    <div className="banner-section mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="banner-box-main-1">
              <div className="banner-box-1 d-flex justify-content-center align-items-center">
                <img
                  src="./assets/Banner/gun.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="banner-box-1-info">
                <h3 className="text-center">WELCOME TO JB MILITARY AUCTIONS</h3>
                <p className="text-center">
                  Western Australia’s largest military antique store. We stock
                  over 3,000 items for sale. We also run 4 military antique
                  auctions a year, please contact us for further details.
                </p>
                <div className="banner-box-1-btn text-center mt-3">
                  <a href="#">
                    read more <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="banner-box-main-2 mt-4 mb-5">
              <div className="banner-box-2">
                <img src="./assets/Banner/banner2.png" alt="" />
              </div>

              <div className="banner-box-main-2-info">
                <h5 className="text-center">Customize your own medal</h5>
                <div className="banner-box-main-2-btn text-center">
                  <a href="#">Shop Now <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav ={false}
              items={1}
              autoplay={true}
              autoplayTimeout={4000}
              autoplayHoverPause={true}
                animateIn="fadeIn"
              animateOut="fadeOut"
            >
              <div className="item">
                <div className="banner-img">
                <img
                  src="./assets/Banner/banner1.webp"
                  alt="Slide 1"
                  className="img-fluid"
                />
                </div>
              </div>

              <div className="item">
                 <div className="banner-img">
                <img
                  src="./assets/Banner/banner2.webp"
                  alt="Slide 1"
                  className="img-fluid"
                />
                </div>
              </div>

              <div className="item">
                 <div className="banner-img">
                <img
                  src="./assets/Banner/banner3.webp"
                  alt="Slide 1"
                  className="img-fluid"
                />
                </div>
              </div>

              <div className="item">
                 <div className="banner-img">
                <img
                  src="./assets/Banner/banner4.webp"
                  alt="Slide 1"
                  className="img-fluid"
                />
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
