import React from 'react'

export default function AuctionBid() {
  return (
    <>
    <section className='auction_bid_wrapper mt-4'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xl-6">
                    <div className="overlay_vedio_sec position-relative">
                        <img src="./assets/auction/vid1.webp" alt="" />
                        <a className="play-btn" href="#"></a>
                    </div>
                    <div className="bottom_title">
                        <h4>How to bid at JB Military Antique Auctions </h4>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-6">
                    <div className="overlay_vedio_sec position-relative">
                        <img src="./assets/auction/auctionnew2.webp" alt="" />
                        <a className="play-btn" href="#"></a>
                    </div>
                    <div className="bottom_title">
                        <h4>How to bid at JB Military Antique Auctions </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}