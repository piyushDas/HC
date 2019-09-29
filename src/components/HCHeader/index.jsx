import React from 'react'
import './_HC_header.scss'
import Logo from '../../images/logo.png'
import User from '../../images/user.png'
import More from '../../images/more.png'

const HCHeader = props => {
  return (
    <div className="hc_header">
      <img src={Logo} alt="" />

      <div className="right-options">
        <div className="user-details">
          <img src={User} alt="" />
          <span>mailpiyushdas@gmail.com</span>
        </div>
        <div className="more">
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HCHeader
