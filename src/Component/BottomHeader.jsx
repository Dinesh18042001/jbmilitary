import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomHeader() {
  return (
    <>
    <section className='bottom_footer_wrapper'>
        <div className="container">
            <div className="row">
                <div className="bottom_menu">
                    <div className="link">
                        <Link to="/"><span><img src="./assets/icon/homeb.png" alt="" /></span> Home </Link>
                    </div>
                    <div className="link">
                        <Link to="productdetails"><span><img src="./assets/icon/shopping-bag.png" alt="" /></span> Shop </Link>
                    </div>
                   
                    <div className="link">
                        <a href="#"><span><img src="./assets/icon/loupe.png" alt="" /></span> Search </a>
                    </div>
                    <div className="link">
                        <a href="#"><span><img src="./assets/icon/shopping-cart.png" alt="" /></span> Cart </a>
                    </div>
                    <div className="link">
                        <a href="#"><span><img src="./assets/icon/auction.png" alt="" /></span> Auction </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}