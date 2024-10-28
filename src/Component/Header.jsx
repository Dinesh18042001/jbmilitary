import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu';

export default function Header() {
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
                      <div className="icon-box">
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                      <div className="icon-box">
                        <a href="#">
                          <i className="fas fa-cart-plus"></i>
                        </a>
                      </div>
                      <div className="icon-box">
                        <a href="#">
                          <i className="fas fa-user-circle"></i>
                        </a>
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
              data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Medals
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="customizemedal">
                      Customize Medal
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#auctions"
                  >
                    Upcoming Auctions
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#selling"
                  >
                    Selling?
                  </a>
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
                <li className="nav-item search-icon">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#search"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>
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
      <MobileMenu/>
    </>
  );
}
