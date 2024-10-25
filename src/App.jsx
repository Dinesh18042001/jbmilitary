import './App.css'
import './responsive.css'
import Banner from './Component/Banner'
import CategoriesProducts from './Component/CategoriesProducts'
import CategoriesSlider from './Component/CategoriesSlider'
import Header from './Component/Header'
import Auction from './Component/Auction'

function App() {


  return (
    <>
    <Header/>
    <Banner/>
    <CategoriesSlider/>
    <CategoriesProducts/>
    <Auction/>
    </>
  )
}

export default App
