import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/an_bg1.png'
import NavLink from '@/components/NavLink'
import NewsNav from '@/components/NewsNav'
import CardNews from '@/components/CardNews'
import imgBg1 from '@/static/img/an_item1.png'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import './index.scss'

export default function AboutNewsExhibition() {
    const navigate = useNavigate()


    const toPage = (address, info) => {
        navigate('/home/' + address+'/about/'+info);
    }
    return (
        <div className='about_news_exhibition'>
            <TopInfo imgBg={imgBg} title={'News'} styleSelf={{ bgColor: '#000' }} />
            <NavLink />
            <NewsNav />
            <CardNews link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'The Optical Networking and Communication Conference & EXHIBITION'} infoList={['EXHIBITION: 07 – 09 March 2023','Linktel booth:2531']}  img={imgBg1}/>
            <CardNews link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'The Optical Networking and Communication Conference & EXHIBITION'} infoList={['EXHIBITION: 07 – 09 March 2023','Linktel booth:2531']}  img={imgBg1}/>
            <CardNews link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'The Optical Networking and Communication Conference & EXHIBITION'} infoList={['EXHIBITION: 07 – 09 March 2023','Linktel booth:2531']}  img={imgBg1}/>

        </div>
    )
}
