import React from "react";

export default function AuctionBanner() {
  return (
    <>
      <div className="inner_banner_sec">
        <div className="container">
          <div className="inner-banner position-relative mt-5">
            <img src="./assets/Banner/auction.webp" alt="Banner" />
            <div className="inner-content">
              <h3 className="text-center">Upcoming Auction</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
