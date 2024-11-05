import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer'
import BottomHeader from "./BottomHeader";
import ScrollToTop from "../../ScrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Outlet />
     <Footer/>
     <BottomHeader/>
    </>
  );
};

export default Layout;
