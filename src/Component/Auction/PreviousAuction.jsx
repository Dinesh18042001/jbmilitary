import React from "react";
import OwlCarousel from "react-owl-carousel"; // Import the Owl Carousel component
import "owl.carousel/dist/assets/owl.carousel.css"; // Import the Owl Carousel CSS
import "owl.carousel/dist/assets/owl.theme.default.css"; // Import the Owl Carousel theme

export default function PreviousAuction() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      <div className="previous_auction_wrapper mt-5">
        <div className="container">
          <div className="row py-3">
            <div className="upcomingauctions-section-tittle">
              <p className="text-center mb-0">Previous</p>
              <h2 className="text-center mt-2">Auctions</h2>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-3 col-xl-3">
              <div className="previou_auction_card text-center">
                <span>
                  <img src="./assets/auction/auction4.png" alt="" />
                </span>
                <div className="auction_content">
                  <a href="#">
                    <p className="m-0">Auction 1</p>
                    <div className="aution_inner">
                    2 October 2016
                    </div>
                  </a>
                </div>
              </div>
              <div className="previou_auction_card text-center">
                <span>
                  <img src="./assets/auction/auction4.png" alt="" />
                </span>
                <div className="auction_content">
                  <a href="#">
                    <p className="m-0">Auction 1</p>
                    <div className="aution_inner">
                    2 October 2016
                    </div>
                  </a>
                </div>
              </div>
            </div> */}

            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="previou_auction_card text-center">
                  <span>
                    <img src="./assets/auction/auction4.png" alt="" />
                  </span>
                  <div className="auction_content">
                    <a href="#">
                      <p className="m-0">Auction 1</p>
                      <div className="aution_inner">2 October 2016</div>
                    </a>
                  </div>
                </div>
                <div className="previou_auction_card text-center">
                  <span>
                    <img src="./assets/auction/auction4.png" alt="" />
                  </span>
                  <div className="auction_content">
                    <a href="#">
                      <p className="m-0">Auction 1</p>
                      <div className="aution_inner">2 October 2016</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="previou_auction_card text-center">
                  <span>
                    <img src="./assets/auction/auction4.png" alt="" />
                  </span>
                  <div className="auction_content">
                    <a href="#">
                      <p className="m-0">Auction 1</p>
                      <div className="aution_inner">2 October 2016</div>
                    </a>
                  </div>
                </div>
                <div className="previou_auction_card text-center">
                  <span>
                    <img src="./assets/auction/auction4.png" alt="" />
                  </span>
                  <div className="auction_content">
                    <a href="#">
                      <p className="m-0">Auction 1</p>
                      <div className="aution_inner">2 October 2016</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="previou_auction_card text-center">
                  <span>
                    <img src="./assets/auction/auction4.png" alt="" />
                  </span>
                  <div className="auction_content">
                    <a href="#">
                      <p className="m-0">Auction 1</p>
                      <div className="aution_inner">2 October 2016</div>
                    </a>
                  </div>
                </div>
                <div className="previou_auction_card text-center">
                  <span>
                    <img src="./assets/auction/auction4.png" alt="" />
                  </span>
                  <div className="auction_content">
                    <a href="#">
                      <p className="m-0">Auction 1</p>
                      <div className="aution_inner">2 October 2016</div>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
