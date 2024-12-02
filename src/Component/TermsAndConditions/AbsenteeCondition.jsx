import React from "react";

export default function AbsenteeCondition() {
  return (
    <>
      <div className="sellercondition-section mt-5">
        <div className="container">
          <div className="seller-condition-banner">
            <img src="./assets/terms-and-conditions/auction.webp" alt="" />

            <div className="seller-condition-banner-tittle">
              <h4 className="text-center">Seller Terms & Conditions</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="absenteecondition-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="absenteecondition-form">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const printWindow = window.open(
                      "./assets/terms-and-conditions/JB-Military-Bidding-Form1.pdf",
                      "_blank"
                    );
                    if (printWindow) {
                      printWindow.onload = () => {
                        printWindow.print();
                      };
                    }
                  }}
                >
                  <img
                    src="./assets/terms-and-conditions/form.jpg"
                    alt="Bidding Form"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="absenteecondition-form-info">
                <h1 className="">Absentee/Phone Bid Form</h1>

                <p>Please contact us on +61892765113 or email:</p>
                <p>
                  <a href="#">jamey@jbmilitaryantiques.com.au</a> if you have
                  any questions.
                </p>

                <p className="mt-4">
                  All lots are guaranteed authentic unless otherwise described
                  and come with a 90-day inspection/return period.
                </p>

                <div className="absenteecondition-form-info-btn mt-5">
                  <a
                    href="./assets/terms-and-conditions/JB-Military-Bidding-Form1.pdf"
                    download="JB-Military-Bidding-Form1.pdf"
                  >
                    <i className="fa-solid fa-download me-1"></i> Download
                    Absentee/Phone Bid Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
