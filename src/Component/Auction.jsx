import React from "react";

export default function Auction() {
  return (
    <>
      <div className="auction_wrapper py-5">
        <div className="container-fluid p-0">
          <div className="wrapper">
            <div className="row gx-0 gy-4">
              <div className="col-lg-6 col-xl-6">
                <div className="aoction_card">
                  <div className="card_img">
                    <img
                      src="./assets/auction/auction1.webp"
                      alt="Auction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="auc_content">
                    <h3>Upcoming auctions 2024</h3>
                    <p>
                      Our next auction for 2024 will take place 1st December and
                      will be a traditional auction, with floor, absentee &
                      phone bidding, with internet bids via Invaluable.com.
                    </p>
                    <span>
                      We will be conducting specialist militaria auctions on the
                      following dates in 2024.
                    </span>
                    <div className="date_btn">
                      <span>*1st December</span>
                    </div>
                    <div className="read_btn mt-5">
                      <a href="#">
                        Read More <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="aoction_card">
                  <div className="card_img">
                    <img
                      src="./assets/auction/auction2.webp"
                      alt="Auction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="auc_content card_2">
                    <h3>Are you looking?</h3>
                    <p>
                    We buy militaria direct from the public either through our shop or through our website. Please contact us direct on (08) 9276 5113 or fill in your details below. For quick contact, email us at:
                    </p>
                    <span>
                    You can also take advantage of our 4 specialist militaria auctions per year to sell your single item or collection through. Our seller fees are just 15% of the final auction sale price. For further details, please contact us.
                    </span>
                    <div className="date_btn">
                      <span>jamey@jbmilitaryantiques.com.au</span>
                    </div>
                    <div className="read_btn mt-5">
                      <a href="#">
                        Read More <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
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
