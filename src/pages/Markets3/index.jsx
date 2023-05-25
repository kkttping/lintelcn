import React from 'react'
import NavLink from '@/components/NavLink'
import { useParams } from 'react-router-dom';
import imgitem from '@/static/img/m3_bg1.png'

import './index.scss'
export default function Market3() {
    const getParams = useParams();

    return (
        <div className='market3'>
            <NavLink />
            <div className='title'>
                {getParams?.title}
            </div>
            <div className='info'>
                Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.
            </div>
            <div className='img'>
                <img src={imgitem} alt="" />
            </div>
        </div>
    )
}
