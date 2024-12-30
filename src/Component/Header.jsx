import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.cart.cart);

  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      <div className="nav-group">
        {/* top-section */}
        <div className="top-section">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="topbar-link-main-box d-flex justify-content-between gap-4">
                  <div className="topbar-link">
                    <a href="#">
                      <i className="fa-solid fa-phone me-2"></i> +61 08 9276
                      5113
                    </a>
                  </div>
                  <div className="topbar-link">
                    <a href="#">
                      <i className="fa-solid fa-envelope me-2"></i>{" "}
                      jamey@jbmilitaryantiques.com.au
                    </a>
                  </div>
                  <div className="topbar-link">
                    <a href="#">
                      <i className="fa-solid fa-location-dot me-2"></i> 2/135
                      Russell St, 6062, Morley, WA
                    </a>
                  </div>
                  <div className="topbar-link">
                    <div className="icon-box-main d-flex gap-4">
                      <div className="like-icon-box position-relative">
                        <Link to="wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </Link>

                        <div className="like-count-box">
                          <p>0</p>
                        </div>
                      </div>

                      <div className="card-icon-box position-relative">
                        <Link to="card">
                          <i className="fas fa-cart-plus"></i>
                        </Link>
                        <div className="count-box">
                          <p>{items.length}</p>
                        </div>
                      </div>

                      <div className="icon-box">
                        <div className="icon-box">
                          {/* Dropdown */}
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="dropdown-toggle no-arrow"
                              id="profileDropdown"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-user-circle fa-2x"></i>
                            </Link>
                            {/* Dropdown menu */}
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="profileDropdown"
                            >
                              <li>
                                <Link className="dropdown-item" to="profile">
                                  <i class="fa-solid fa-user me-1"></i> Profile
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  <i class="fa-solid fa-truck-fast me-1"></i>
                                  Orders
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  <i class="fa-solid fa-right-from-bracket me-1"></i>
                                  Logout
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="login">
                                  <i class="fa-solid fa-right-from-bracket me-1"></i>
                                  Login
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top-section end */}

        {/* navbar section  start */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="./assets/logo.png" alt="" />
            </Link>
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              className="d-lg-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  fill="#000"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="mobileServicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Medals <i class="fa-solid fa-caret-down"></i>
                  </a>
                  <ul class="drop_down">
                    <Link className="dropdown-item mb-2" to="/customizemedal">
                      Customize Medal
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Boer War and WW1
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    WW2
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Korea
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Malaysia
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Vietnam
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Afghanistan & Iraq
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Afghanistan & Iraq
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Current Military
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Police & Emergency Services
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Medal Accessories
                    </Link>
                    <Link className="dropdown-item mb-2" to="#">
                    Customize your Medal
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/upcomingauction"
                  >
                    Upcoming Auctions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/selling"
                  >
                    Selling ?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="solditems"
                  >
                    Sold Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="aboutpage"
                  >
                    About
                  </Link>
                </li>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item search-icon">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={handleSearchClick}
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </li>
                </ul>

                {/* Full-Width Search Bar */}
                {showSearchBar && (
                  <div className="full-width-search-bar">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type to search..."
                    />
                    <button
                      className="btn btn-danger  close-search"
                      onClick={handleSearchClick}
                    >
                      Close
                    </button>
                  </div>
                )}
              </ul>
              <form className="header-btn ms-3">
                <Link to="contact">
                  Contact <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </form>
            </div>
          </div>
        </nav>
        {/* navbar section  end */}

        <div className="main-logo">
          <Link to="/">
            <img src="./assets/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <MobileMenu />
    </>
  );
}
