import React from 'react'
import AuctionBanner from './AuctionBanner'
import AuctionContent from './AuctionContent'
import AuctionBid from './AuctionBid'
import PreviousAuction from './PreviousAuction'

export default function AuctionPage() {
  return (
    <>
    <AuctionBanner/>
    <AuctionContent/>
    <AuctionBid/>
    <PreviousAuction/>
    </>
  )
}