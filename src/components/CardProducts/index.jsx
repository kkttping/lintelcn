import React from 'react'
import './index.scss'
export default function CardProducts(props) {
  return (
    <div className='com_card_products'>
        <div className='img'>
          <img src={props.img} alt="" />
        </div>
        <div className='name'><span >Pluggable Transceiver</span></div>
        <div className='bg_lin'></div>
        <div className='bg_hover'>
            <span>NPO/CPO ELSFP & OE Connectivity</span>
            <span>1.6T/3.2T NPO/CPO Optical Engines Optical/Electrical Hybrid Packaging Platforms</span>
            <span onClick={props.toProducts2}>READ MORE</span>

        </div>

    </div>
  )
}
