import React from "react";

export default function AuctionContent() {
  return (
    <>
      <section className="auction_wrapper">
        <div className="container">
          <div className="row title text-center mb-3">
            <h3>JB Military Antiques</h3>
            <h4>Auctions</h4>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-6">
              <div className="img_bx">
                <img src="./assets/auction/aucction.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="auction_content">
                <p>
                  Our next auction for 2024 will take place 1st December and
                  will be a traditional auction, with floor, absentee & phone
                  bidding, with internet bids via Invaluable.com. Please email
                  us to be added to our auction notification list:
                  jamey@jbmilitaryantiques.com.au. All lots are guaranteed
                  authentic unless otherwise described and come with a 90-day
                  inspection/return period.
                </p>
                <h4>JB Military Antiques auction dates for 2024</h4>
                <p>
                  We will be conducting specialist militaria auctions on the
                  following dates in 2024. *1st December Please contact us
                  directly before auctions to arrange any prior phone or
                  absentee bidding or if you have any questions or queries
                  regarding the lots featured. All items need to be received by
                  us no later than 6 weeks before each auction date.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-4 text-center bottom_title">
            <h5>The historically important Napoleonic War K.C.B., Army Gold Cross & Medal to Major-General Sir G.R. Bingham sold for $204,000 in our March 2024 auction</h5>
          </div>
        </div>
      </section>
    </>
  );
}
