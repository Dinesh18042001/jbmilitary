import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CategoriesProducts({ categoryType }) {
  const [categories] = useState([
    "Uncategorised",
    "Sold Items",
    "Australian Militaria",
    "Toy & Non Firing Replica Weapons",
    "Modern Combat & Survival Knives",
    "European Militaria",
    "French & Belgian Militaria",
    "USA",
    "Gift Vouchers",
    "Russian & Soviet Union Militaria",
    "Asiatic Militaria",
    "African & Middle Eastern Militaria",
    "South American Militaria",
    "Military Accessories",
    "Replica Firearms",
    "British",
    "German",
  ]);

  const dispatch = useDispatch();




  const products = [
    {
      id: 1,
      name: "8th & 60th Battalion WW1 Australian medal 4750 Leo Charles",
      image: "./assets/product-img/product-card.webp",
      price: "$60.00",
      discountedPrice: "$85.00",
      rating: 5,
      sold: false,
    },
    {
      id: 2,
      name: "Denix M1869 Schofield Single Action Western Replica Revolver Nickel",
      image: "./assets/product-img/pr-j-3.webp",
      price: "$65.00",
      discountedPrice: "$80.00",
      rating: 4,
      sold: true,
    },
    {
      id: 3,
      name: "Original WW1 British rendered inert P14 Enfield .303 cal rifle, U.S. military contract ‘ERA’ stamped",
      image: "./assets/product-img/car-98.webp",
      price: "$70.00",
      discountedPrice: "$90.00",
      rating: 4,
      sold: false,
    },
    {
      id: 4,
      name: "Original WW1 British rendered inert P14 Enfield .303 cal rifle, U.S. military contract ‘ERA’ stamped",
      image: "./assets/product-img/medal.webp",
      price: "$50.00",
      discountedPrice: "$95.00",
      rating: 4,
      sold: true,
    },
    {
      id: 5,
      name: "Original WW1 British rendered inert P14 Enfield .303 cal rifle, U.S. military contract ‘ERA’ stamped",
      image: "./assets/product-img/medal-2.webp",
      price: "$65.00",
      discountedPrice: "$75.00",
      rating: 4,
      sold: false,
    },
    {
      id: 6,
      name: "Original WW1 British rendered inert P14 Enfield .303 cal rifle, U.S. military contract ‘ERA’ stamped",
      image: "./assets/product-img/medal3.webp",
      price: "$65.00",
      discountedPrice: "$44.00",
      rating: 4,
      sold: true,
    },
    {
      id: 1,
      name: "8th & 60th Battalion WW1 Australian medal 4750 Leo Charles",
      image: "./assets/product-img/product-card.webp",
      price: "$65.00",
      discountedPrice: "$95.00",
      rating: 5,
      sold: false,
    },
    {
      id: 2,
      name: "Denix M1869 Schofield Single Action Western Replica Revolver Nickel",
      image: "./assets/product-img/pr-j-3.webp",
      price: "$65.00",
      discountedPrice: "$100.00",
      rating: 4,
      sold: true,
    },
    {
      id: 3,
      name: "Original WW1 British rendered inert P14 Enfield .303 cal rifle, U.S. military contract ‘ERA’ stamped",
      image: "./assets/product-img/car-98.webp",
      price: "$65.00",
      discountedPrice: "$90.00",
      rating: 4,
      sold: true,
    },
  ];

  // Filter products based on `categoryType`
  const filteredProducts = products.filter((product) => {
    if (categoryType === "sold") return product.sold === true;
    if (categoryType === "sale") return product.sold === false;
    return true; // Default: Show all products
  });

  // State to manage open/close status for each accordion item
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle function to open/close accordion items
  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };


//   const hendleadd =(product)=>{
// dispatch(addtoCart(product));
//   }

const hendleadd = (product) => {
  dispatch(addtoCart(product)); // Assuming you have the `dispatch` from Redux
  toast.success(`Product has been added to your cart!`);
};

  return (
    <div className="categoriesproducts-section mb-5 mt-5">
      <div className="container">
        <div className="row gy-5">
          {/* Categories Section */}
          <div className="col-lg-4">
            <div className="categories-item">
              <div className="categories-item-tittle">
                <h5 className="text-center mb-4">All Categories</h5>
              </div>
              {categories.map((category, index) => (
                <div key={index} className="categories-item-link">
                  {/* Conditional accordion for specific categories */}
                  {index === 2 || index === 8 || index === 14 ? (
                    <div className="accordion accordion-flush">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id={`flush-heading-${index}`}
                        >
                          <button
                            className={`accordion-button categories-item-link p-0 ${
                              openAccordion === index ? "" : "collapsed"
                            }`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={
                              openAccordion === index ? "true" : "false"
                            }
                            aria-controls={`flush-collapse-${index}`}
                          >
                            <h6>{category}</h6>
                          </button>
                        </h2>
                        <div
                          id={`flush-collapse-${index}`}
                          className={`accordion-collapse collapse ${
                            openAccordion === index ? "show" : ""
                          }`}
                          aria-labelledby={`flush-heading-${index}`}
                        >
                          <div className="accordion-body">
                            Placeholder for {category} content.
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a href="#">{category}</a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div className="col-lg-8">
            <div className="top_filter d-flex justify-content-between align-items-center">
              <div className="heading_bx">
                <h3>Categories Products</h3>
              </div>
              <div className="filter_bx d-flex justify-content-between align-items-center">
                <div className="select_bx">
                  <select className="form-select" aria-label="Price range">
                    <option selected>1 - 600</option>
                    <option value="1">2 - 600</option>
                    <option value="2">3 - 600</option>
                  </select>
                </div>
                <div className="select_bx">
                  <select className="form-select" aria-label="Sort by rating">
                    <option selected>Sort by average rating</option>
                    <option value="1">Rating 4</option>
                    <option value="2">Rating 5</option>
                    <option value="3">Rating 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="product_main">
              <div className="product_card">
                <div className="row gy-4 pt-3">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="col-lg-4 col-xl-4 col-md-6"
                      >
                        <Link
                          // to="/productdetails"
                          className="product_carbx-link"
                        >
                          <div className="product_carbx">
                            <div className="product_img position-relative">
                              <img src={product.image} alt={product.name} />
                              <div className="overlap_content">
                                {product.sold && (
                                  <div className="btn_sec">
                                    <a href="#">Sold</a>
                                  </div>
                                )}
                                <div className="icon_sec">
                                  <a href="#">
                                    <i className="far fa-heart"></i>
                                  </a>
                                  <a onClick={() =>hendleadd(product)} >
                                    <i className="fas fa-shopping-cart"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content_card">
                              <p>{product.name}</p>
                            </div>
                            <div className="price">
                              <span>{product.price}</span>
                              <span>
                                <del>{product.discountedPrice}</del>
                              </span>
                            </div>
                            <div className="rating">
                              <div className="start_bx">
                                {Array(product.rating)
                                  .fill()
                                  .map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                  ))}
                              </div>
                              <span>(55)</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No sold products available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
      style={{ marginTop: "75px" }} // Add extra space from the top
    />

    </div>
  );
}
