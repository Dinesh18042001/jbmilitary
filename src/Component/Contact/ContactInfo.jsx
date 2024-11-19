import React from "react";

export default function ContactInfo() {
  return (
    <>
      <section className="contact_wrappers">
        <div className="container">
          <div className="row mb-0">
            <div className="text_overlap d-flex justify-content-center">
              <h2 className="text-center">Contact For Any Query</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className=" rounded info_bx row py-5 gy-4 pt-0">
              <div className="col-lg-4 col-xl-4">
                <div className="text-center mb-4 info_card h-100">
                  <div className="info_wrapper">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4 className="">Address</h4>
                    <p className="mb-0 px-2">
                      2/135 Russell St 6062, Morley, WA
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="text-center mb-4 info_card h-100">
                  <div className="info_wrapper">
                    <i className="fas fa-phone-alt"></i>
                    <h4 className="">Mobile</h4>
                    <p className="mb-0">
                      <a href="tel:0478 639 410">0478 639 410</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="text-center info_card h-100">
                  <div className="info_wrapper">
                    <i className="fas fa-envelope"></i>
                    <h4 className="">Email</h4>
                    <p className="mb-0">
                      <a href="mailto:jamey@jbmilitaryantiques.com.au">
                        jamey@jbmilitaryantiques.com.au
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="roundeds">
                <iframe
                  className="rounded w-100"
                  style={{ height: "450px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.277008259598!2d115.89684137448728!3d-31.90101641984465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ba8fc3086fa1%3A0x7c7e6d35dad057dd!2sJB%20Military%20Antiques!5e1!3m2!1sen!2sin!4v1732012061119!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-2">Send us a message</h3>
              <div className="form_input_bx">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "160px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn w-100 py-3 form_btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
