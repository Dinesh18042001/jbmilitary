import React from "react";
import ProductDetailsContent from "./ProductDetailsContent";

export default function ThumbnailSlider() {
  const images = [
    { id: 0, src: "./assets/medal/medal1.webp", alt: "Thumbnail 1" },
    { id: 1, src: "./assets/medal/medal1.webp", alt: "Thumbnail 2" },
    { id: 2, src: "./assets/medal/medal1.webp", alt: "Thumbnail 3" },
    { id: 3, src: "./assets/medal/medal1.webp", alt: "Thumbnail 4" },
    { id: 4, src: "./assets/medal/medal1.webp", alt: "Thumbnail 5" },
    { id: 5, src: "./assets/medal/medal1.webp", alt: "Thumbnail 6" },
    { id: 6, src: "./assets/medal/medal1.webp", alt: "Thumbnail 7" },
    { id: 7, src: "./assets/medal/medal1.webp", alt: "Thumbnail 8" },
  ];


 


    const handleExpandClick = () => {
      Fancybox.show(
        images.map((image) => ({ src: image.src, type: "image" })),
        {
          groupAll: false, // Keep only the selected images in the gallery
        }
      );
    };
    
  

  return (
    <>
      <section className="product_slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-5">
              <div
                id="carousel"
                className="carousel slide"
                data-bs-interval="3000"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image.src}
                        className="d-block w-100"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}

                  <div className="gallery_bx">
                  <a onClick={handleExpandClick} className="expand-link">
                  <i className="fas fa-search-plus"></i> Click to expand
                </a>
                  </div>
                </div>
              </div>

              <div className="clearfix mt-3">
                <div
                  id="thumbcarousel"
                  className="carousel slide"
                  data-bs-interval="12000"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-between">
                        {images.slice(0, 4).map((image) => (
                          <div
                            key={image.id}
                            data-bs-target="#carousel"
                            data-bs-slide-to={image.id}
                            className="thumb"
                          >
                            <img
                              src={image.src}
                              className="img-thumbnail"
                              alt={image.alt}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-between">
                        {images.slice(4, 8).map((image) => (
                          <div
                            key={image.id}
                            data-bs-target="#carousel"
                            data-bs-slide-to={image.id}
                            className="thumb"
                          >
                            <img
                              src={image.src}
                              className="img-thumbnail"
                              alt={image.alt}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Previous Button */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#thumbcarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    >
                      <i class="fas fa-long-arrow-alt-left"></i>{" "}
                      {/* Font Awesome left arrow */}
                    </span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  {/* Next Button */}
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#thumbcarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    >
                      <i class="fas fa-long-arrow-alt-right"></i>{" "}
                      {/* Font Awesome right arrow */}
                    </span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7">
              <ProductDetailsContent/>
            </div>
          </div>
          <div className="row">
            <p className="paraNew">UDR Long service Full Size Medal, established in 1982, is awarded to full time members of the UDR for 15 years exemplary service dating from 1st April 1970 with bars for additional periods of 15 years. it is awarded to officers provided at least 12 years was spent in the ranks prior to commission.</p>
          </div>
        </div>
      </section>
    </>
  );
}








