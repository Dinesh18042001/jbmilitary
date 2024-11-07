import React from "react";
import { Link } from "react-router-dom";
import UpcomingAuctions from "./UpcomingAuctions";

export default function AuctionBid() {
  return (
    <>
      <section className="auction_bid_wrapper mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="overlay_vedio_sec position-relative">
                <img src="./assets/auction/vid1.webp" alt="" />
                <a
                  className="play-btn"
                  data-fancybox
                  href="https://youtu.be/_M9fWP49FOA"
                ></a>
              </div>
              <div className="bottom_title">
                <h4>How to bid at JB Military Antique Auctions</h4>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="overlay_vedio_sec position-relative">
                <img src="./assets/auction/auctionnew2.webp" alt="" />
                <a
                  className="play-btn"
                  data-fancybox
                  href="https://youtu.be/mRDSXC4cN5w"
                ></a>
              </div>
              <div className="bottom_title">
                <h4>How to bid at JB Military Antique Auctions</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="auctionbid-info mt-4">
        <div className="container">
          <p>
            Absentee and phone bidding forms can be downloaded and completed
            (see link below). You will need to fill in all details, including
            credit card, circling which bidding option you require
          </p>
          <p>
            All prices are listed in Australian Dollars.{" "}
            <strong>
              The buyer’s premium onsite, telephone & absentee bidding is 18%
            </strong>{" "}
            , with internet bidding via invaluable.com with the relevant bidder
            rates and fees. All lots are guaranteed authentic and come with a
            90-day inspection/return period. All lots are deemed ‘inspected’ for
            any faults or defects based on the full description and photographs
            provided both electronically and via the pre-sale viewing, with lots
            sold without warranty in this regard. We are proud to announce the
            full catalogue, with photographs now available for viewing and pre
            auction bidding on invaluable.com (can be viewed through our website
            auction section), as well as offering traditional floor, absentee &
            phone bidding.
          </p>
          <p>
            Please call us on
            <a href="tel:+61892765113"> +61892765113 </a>
            or email :{" "}
            <a href=" mailto:jamey@jbmilitaryantiques.com.au">
              jamey@jbmilitaryantiques.com.au
            </a>{" "}
            if you require any further information.
          </p>
        </div>
      </div>

      <div className="conditions-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
              <div className="conditions-btn text-center">
                <Link to="/seller-terms-conditions">Seller Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
              <div className="conditions-btn text-center">
                <Link to="/buyer-terms-conditions">Buyer Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="conditions-btn text-center">
                <Link to="/absentee-phone-bid-form">Absentee/Phone Bid Form</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpcomingAuctions/>
    </>
  );
}
