import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";

import Banner from "./Component/Banner";
import CategoriesProducts from "./Component/CategoriesProducts";
import CategoriesSlider from "./Component/CategoriesSlider";
import Auction from "./Component/Auction";
import About from "./Component/About";
import Testimonial from "./Component/Testimonial";
import Newsletter from "./Component/Newsletter";
import Layout from "./Component/Layout";
import Shop from "./Component/Shop/Shop";
import AboutPage from "./Component/About/AboutPage";
import SoldItems from "./Component/SoldItems/SoldItems";
import Contact from "./Component/Contact/Contact";
import CustomizeMadel from "./Component/CustomizeMadel/CustomizeMadel";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import AuctionPage from "./Component/Auction/AuctionPage";
import SellerCondition from "./Component/TermsAndConditions/SellerCondition";
import BuyerCondition from "./Component/TermsAndConditions/BuyerCondition";
import AbsenteeCondition from "./Component/TermsAndConditions/AbsenteeCondition";
import Selling from "./Component/Selling/Selling";
import Login from "./Component/Modal/LogIn";
import UserProfile from "./Component/UserProfile/UserProfile";
import WishlistPage from "./Component/Wishlist/WishlistPage";
import AddToCart from "./Component/AddToCart/AddToCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Banner />} />
          <Route path="categories-slider" element={<CategoriesSlider />} />
          <Route path="categories-products" element={<CategoriesProducts />} />
          <Route path="auction" element={<Auction />} />
          <Route path="about" element={<About />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="shop" element={<Shop />} />
          <Route path="aboutpage" element={<AboutPage />} />
          <Route path="solditems" element={<SoldItems />} />
          <Route path="contact" element={<Contact />} />
          <Route path="customizemedal" element={<CustomizeMadel />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="upcomingauction" element={<AuctionPage />} />
          <Route path="seller-terms-conditions" element={<SellerCondition />} />
          <Route path="buyer-terms-conditions" element={<BuyerCondition />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="card" element={<AddToCart />} />

          <Route
            path="absentee-phone-bid-form"
            element={<AbsenteeCondition />}
          />
          <Route path="selling" element={<Selling />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
