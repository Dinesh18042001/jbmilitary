import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";
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

  const filteredProducts = products.filter((product) => {
    if (categoryType === "sold") return product.sold === true;
    if (categoryType === "sale") return product.sold === false;
    return true;
  });

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
    toast.success(`Product added to your cart!`);
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    toast.info(`Product added to your wishlist!`);
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
                  {index === 2 || index === 8 || index === 14 ? (
                    <div className="accordion accordion-flush">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id={`flush-heading-${index}`}>
                          <button
                            className={`accordion-button categories-item-link p-0 ${
                              openAccordion === index ? "" : "collapsed"
                            }`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openAccordion === index ? "true" : "false"}
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
            </div>

            <div className="product_main">
              <div className="product_card">
                <div className="row gy-4 pt-3">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div key={product.id} className="col-lg-4 col-md-6">
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
                                <a onClick={() => handleAddToWishlist(product)}>
                                  <i className="far fa-heart"></i>
                                </a>
                                <a onClick={() => handleAddToCart(product)}>
                                  <i className="fas fa-shopping-cart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="content_card">
                            <Link to="/productdetails"><p>{product.name}</p></Link>
                          </div>
                          <div className="price">
                            <span>{product.price}</span>
                            <span>
                              <del>{product.discountedPrice}</del>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No products available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{ marginTop: "75px" }} />
    </div>
  );
}
