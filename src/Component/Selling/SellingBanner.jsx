import React from "react";

export default function SellingBanner() {
  return (
    <>
      <div className="inner_banner_sec">
        <div className="container">
          <div className="inner-banner position-relative mt-5">
            <img src="./assets/Banner/jb-selling.webp" alt="Banner" />
            <div className="inner-content">
              <h3 className="text-center">
                Are you looking to sell Your Antiques?
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="content_wrapper py-3">
        <div className="container">
          <div className="row">
            <h4 className="text-center">Sell to us</h4>
            <p className="text-center">We buy militaria direct from the public either through our shop or through our website.
            Please contact us direct on <a href="tel:(08) 9276 5113">(08) 9276 5113</a>  or fill in your details below. For quick contact, email us at: <a href="mailto:jamey@jbmilitaryantiques.com.au">jamey@jbmilitaryantiques.com.au</a>. You can also take advantage of our 3 specialist militaria auctions per year to sell your single item or collection through. Our seller fees are just 15% of the final auction sale price. For further details, please contact us.</p>
          </div>
        </div>
      </div>
    </>
  );
}
