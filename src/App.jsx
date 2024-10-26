import "./App.css";
import "./responsive.css";
import Banner from "./Component/Banner";
import CategoriesProducts from "./Component/CategoriesProducts";
import CategoriesSlider from "./Component/CategoriesSlider";
import Header from "./Component/Header";
import Auction from "./Component/Auction";
import About from "./Component/About";
import Testimonial from "./Component/Testimonial";
import Newsletter from "./Component/Newsletter";
import Footer from "./Component/footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoriesSlider />
      <CategoriesProducts />
      <Auction />
      <About />
      <Testimonial />
      <Newsletter />
      <Footer/>
    </>
  );
}

export default App;
