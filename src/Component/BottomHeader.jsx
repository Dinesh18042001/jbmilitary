import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BottomHeader() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const items = useSelector((state) => state.cart.cart);

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      <section className="bottom_footer_wrapper">
        <div className="container">
          <div className="row">
            <div className="bottom_menu d-flex justify-content-between align-items-center">
              <div className="link">
                <Link to="/">
                  <span>
                    <img src="./assets/icon/homeb.png" alt="Home Icon" />
                  </span>
                  Home
                </Link>
              </div>
              <div className="link">
                <Link to="shop">
                  <span>
                    <img src="./assets/icon/shopping-bag.png" alt="Shop Icon" />
                  </span>
                  Shop
                </Link>
              </div>
              <div className="link">
                <a href="#" onClick={handleSearchClick}>
                  <span>
                    <img src="./assets/icon/loupe.png" alt="Search Icon" />
                  </span>
                  Search
                </a>
              </div>
              <div className="link position-relative">
                <Link to="card">
                  <span>
                    <img
                      src="./assets/icon/shopping-cart.png"
                      alt="Cart Icon"
                    />
                  </span>
                  Cart
                </Link>
                <div className="count-box1">
                  <p>{items.length}</p>
                </div>
              </div>
              <div className="link">
                <Link to="upcomingauction">
                  <span>
                    <img src="./assets/icon/auction.png" alt="Auction Icon" />
                  </span>
                  Auction
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Search Bar */}
      {showSearchBar && (
        <div className="full-width-search-bar">
          <div className="container d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Type to search..."
            />
            <button
              className="btn btn-danger close-search ms-2"
              onClick={handleSearchClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
