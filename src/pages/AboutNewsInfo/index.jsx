import React from 'react'
import NavLink from '@/components/NavLink'
import { useParams } from 'react-router-dom';
import imgitem from '@/static/img/an_item3.png'


import './index.scss'
export default function AboutNewsInfo() {
    const getParams = useParams();

    return (
        <div className='about_news_info'>
            <NavLink />
            <div className='title'>
                <div className='title_box'>
                    <div className='time'>
                        <span>03-04<br /></span>
                        <span>2023</span>
                    </div>
                    <div className='title_info'>{getParams?.title}</div>

                    <div className='title_ps'>
                        EXHIBITION: 07 – 09 March 2023<br />
                        Linktel booth:2531
                    </div>
                </div>

            </div>
            <div className='info'>
                Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.
            </div>
            <div className='img'>
                <img src={imgitem} alt="" />
            </div>
            <div className='info'>
                Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.
            </div>
        </div>
    )
}
