import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



export default function Testimonial() {
  return (
    <>
      <div className="testimonial_wrapper py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-xl-4">
              <div className="main_title">
                <h3>Check out our</h3>
                <h4>Reviews</h4>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <div className="main_title">
                <p>
                  We take care and pride in what we do, respecting our
                  memorabilia and customers alike. Please take a moment to read
                  some of the reviews left by our valued customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-xl-3">
              <div className="review_info">
                <h5>JB Military Antiques</h5>
                <div className="rate my-2">
                  <span>4.5</span>
                  <div className="icon">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <div className="info_details my-2">
                  <p>Based on 177 reviews</p>
                  <img src="./assets/icon/powerd.png" alt="" />
                </div>
                <div className="write_review my-4">
                  <a href="#">
                    review on us{" "}
                    <img src="./assets/icon/devicon_google.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-xl-9">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                dots={true}
                autoplay={false}
                autoplayTimeout={4000}
                autoplayHoverPause={true}
                animateIn="fadeIn"
                animateOut="fadeOut"
                navText={[
                    "<i class='fas fa-arrow-left'></i>",  // Custom previous icon
                    "<i class='fas fa-arrow-right'></i>", // Custom next icon
                  ]}
                responsive={{
                    0: {
                      items: 1, // 1 item on mobile
                    },
                    768: {
                      items: 2, // 2 items on tablet
                    },
                    1024: {
                      items: 3, // 3 items on larger screens
                    },
                  }}
              >
                <div className="item">
                  <div className="main_card position-relative">
                  <div className="postrop">
                        <span>
                          <i class="fas fa-quote-left"></i>
                        </span>
                      </div>
                    <div className="testimonial_card position-relative py-3">
                      <div className="rate my-2">
                        <span>4.5</span>
                        <div className="icon">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                      <div className="cntent">
                        <p>
                          Great shop and staff. Had my father's medals fixed
                          here. Quick turnaround and helpful advice.
                        </p>
                      </div>
                        <div className="google_icon">
                            <img src="./assets/icon/devicon_google.png" alt="" />
                        </div>
                    </div>
                    <div className="name_elem d-flex justify-content-center align-items-center">
                      <span>A</span>
                    </div>
                    <div className="name_cont">
                      <p className="text-center m-0">Angelina Ronzio</p>
                      <p className="text-center">7 months ago</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="main_card position-relative">
                  <div className="postrop">
                        <span>
                          <i class="fas fa-quote-left"></i>
                        </span>
                      </div>
                    <div className="testimonial_card position-relative py-3">
                      <div className="rate my-2">
                        <span>4.5</span>
                        <div className="icon">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                      <div className="cntent">
                        <p>
                          Great shop and staff. Had my father's medals fixed
                          here. Quick turnaround and helpful advice.
                        </p>
                      </div>
                        <div className="google_icon">
                            <img src="./assets/icon/devicon_google.png" alt="" />
                        </div>
                    </div>
                    <div className="name_elem d-flex justify-content-center align-items-center">
                      <span>A</span>
                    </div>
                    <div className="name_cont">
                      <p className="text-center m-0">Angelina Ronzio</p>
                      <p className="text-center">7 months ago</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="main_card position-relative">
                  <div className="postrop">
                        <span>
                          <i class="fas fa-quote-left"></i>
                        </span>
                      </div>
                    <div className="testimonial_card position-relative py-3">
                      <div className="rate my-2">
                        <span>4.5</span>
                        <div className="icon">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                      <div className="cntent">
                        <p>
                          Great shop and staff. Had my father's medals fixed
                          here. Quick turnaround and helpful advice.
                        </p>
                      </div>
                        <div className="google_icon">
                            <img src="./assets/icon/devicon_google.png" alt="" />
                        </div>
                    </div>
                    <div className="name_elem d-flex justify-content-center align-items-center">
                      <span>A</span>
                    </div>
                    <div className="name_cont">
                      <p className="text-center m-0">Angelina Ronzio</p>
                      <p className="text-center">7 months ago</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="main_card position-relative">
                  <div className="postrop">
                        <span>
                          <i class="fas fa-quote-left"></i>
                        </span>
                      </div>
                    <div className="testimonial_card position-relative py-3">
                      <div className="rate my-2">
                        <span>4.5</span>
                        <div className="icon">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                      <div className="cntent">
                        <p>
                          Great shop and staff. Had my father's medals fixed
                          here. Quick turnaround and helpful advice.
                        </p>
                      </div>
                        <div className="google_icon">
                            <img src="./assets/icon/devicon_google.png" alt="" />
                        </div>
                    </div>
                    <div className="name_elem d-flex justify-content-center align-items-center">
                      <span>A</span>
                    </div>
                    <div className="name_cont">
                      <p className="text-center m-0">Angelina Ronzio</p>
                      <p className="text-center">7 months ago</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
