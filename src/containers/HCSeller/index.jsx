import React from 'react'
import HCHeader from '../../components/HCHeader/index'
import HCCreateAddBanner from '../../components/HCCreateAddBanner'
import HCSellerAddItem from '../../components/HCSellerAdItem'
import './_HCSeller.scss'

const HCSeller = props => {
  return (
    <React.Fragment>
      <HCHeader />
      <HCCreateAddBanner />
      <div className="section-header">
        My listings
      </div>
      <HCSellerAddItem />
      <HCSellerAddItem />
    </React.Fragment>
  )
}

export default HCSeller
