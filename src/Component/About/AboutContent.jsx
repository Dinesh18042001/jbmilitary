import React from "react";

export default function AboutContent() {
  return (
    <>
      <section className="about_wrapper_page py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-5">
              <div className="img_wrapper">
                <img src="./assets/Banner/try-scaled-1.webp" alt="Banner" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="inner-content">
                <h3>JB Military Antiques</h3>
                <p>
                  We are Western Australia’s largest military antiques store,
                  founded in 2011 by Jamey Blewitt in Perth, Western Australia.
                  Originally a retail business, Jamey and the team have now gone
                  on to build the business into an established auction house,
                  hosting up to 4 auctions per year for nearly 12 years,
                  specializing in the sale of 19th & 20th century German,
                  British, Australian & world militaria, including medals,
                  uniforms, swords/ edged weapons, flags, unit patches/
                  insignia, badges, helmets/ headgear, field equipment, military
                  books and other items of related memorabilia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
