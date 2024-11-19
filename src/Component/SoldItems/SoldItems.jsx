import React from 'react'
import SoldBanner from './SoldBanner'
import CategoriesProducts from '../CategoriesProducts'

export default function SoldItems() {
  return (
   <>
   <SoldBanner/>
   <CategoriesProducts categoryType="sold" />

   </>
  )
}
