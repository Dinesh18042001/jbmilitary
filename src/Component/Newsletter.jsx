import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="newsletter-wrapper pt-4">
        <div className="container">
          <div className="row align-items-center news_bg gy-3">
            <div className="col-lg-3 col-xl-3">
              <div className="content">
                <h3>Newsletter</h3>
                <p>Get you good opportunity</p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="form_wrap">
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3">
                <div className="social-icon">
                    <p>Follow Us</p>
                    <div className="icon_bx">
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
