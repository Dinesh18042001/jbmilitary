import React from "react";

export default function About() {
  return (
    <>
      <div className="about_wrapper py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xl-3">
              <div className="left_content">
                <div className="row gy-3">
                  <div className="col-lg-12">
                    <div className="img_bx">
                      <img src="./assets/about/jabout1.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="img_bx overlay position-relative">
                      <img src="./assets/about/jabout1.webp" alt="" />
                      <div className="overlay_cont">
                        <div className="icon">
                          <i class="fas fa-award"></i>
                        </div>
                        <div className="counter">
                          <span>20+</span>
                          <p>Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about_cont">
                <h3>About</h3>
                <h4>JB Military Antiques</h4>
                <p>
                  At JB Military Antiques, we specialise in the purchase and
                  sale of 19th & 20th century German, British, Australian &
                  world militaria, including medals, uniforms, swords/ edged
                  weapons, flags, unit patches/ insignia, badges, helmets/
                  headgear, field equipment, military books and other items of
                  related memorabilia. We buy and sell worldwide and will beat
                  any competitors written quote to buy quality militaria and pay
                  cash on the spot! You can also shop online via our e-store.
                  Our team’s decades of collecting experience will enable you to
                  shop with confidence and as always, we offer a 100% lifetime
                  guarantee on all our items (unless otherwise marked). We also
                  offer professional medal mounting services, utilizing handsewn
                  construction. We regret the necessity to inform our many world
                  customers and visitors that we are in no way affiliated with
                  John Burridge (also of Perth). It is unfortunate that being
                  the largest military antiques business in Western Australia we
                  now find the need to post this advice.
                </p>
                <div class="read_btn">
                  <a href="#">
                    Read More <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3">
              <div className="right_side_wrapper">
                <div className="row ">
                  <div className="col-lg-12 col-xl-12">
                    <div className="cunter_sec">
                      <span className="img_bx">
                        <img src="./assets/icon/customer.png" alt="" />
                      </span>
                      <div class="counter">
                        <span>110+</span>
                        <p>Satisfied Client</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-12">
                    <div className="cunter_sec">
                      <span className="img_bx">
                        <img src="./assets/icon/awar-sym.png" alt="" />
                      </span>
                      <div class="counter">
                        <span>100+</span>
                        <p>Win Awarded</p>
                      </div>
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
