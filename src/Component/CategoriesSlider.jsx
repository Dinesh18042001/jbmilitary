import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Import the Owl Carousel component
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import the Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import the Owl Carousel theme

export default function CategoriesSlider() {
  // Configuration options for Owl Carousel
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      <div className="categoriesslider-section mb-5">
        <div className="container">
            <div className="categoriesslider-section-tittle mb-4">
                <h4>Categories</h4>
            </div>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <div className="categories-card">
                <img src="./assets/CategoriesSlider/img1.webp" alt="" />
                <h6 className='text-center mt-2'>Australian Militaria</h6>
              </div>
            </div>
            <div className="item">
            <div className="categories-card">
                <img src="./assets/CategoriesSlider/img2.webp" alt="" />
                <h6 className='text-center mt-2' >Australian Original Medals</h6>
              </div>
            </div>
            <div className="item">
            <div className="categories-card">
                <img src="./assets/CategoriesSlider/img3.webp" alt="" />
                <h6 className='text-center mt-2'>Modern Combat & Survival Knives</h6>
              </div>
            </div>
            <div className="item">
            <div className="categories-card">
                <img src="./assets/CategoriesSlider/img4.webp" alt="" />
                <h6 className='text-center mt-2'>Denix M1869 Schofield Single </h6>
              </div>
            </div>
            <div className="item">
            <div className="categories-card">
                <img src="./assets/CategoriesSlider/img2.webp" alt="" />
                <h6 className='text-center mt-2'>Australian Original Medals</h6>
              </div>
            </div>

          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
