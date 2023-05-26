import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/ar_bg1.png'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import CardNews2 from '@/components/CardNews2'
import imgBg1 from '@/static/img/ar_item1.png'

import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import './index.scss'
export default function AboutResponsibility() {
    const navigate = useNavigate()


    const toPage = (address, info) => {
        navigate('/' + address+'/'+info);
    }
    return (
        <div className='about_responsibility'>
            <TopInfo imgBg={imgBg} title={'Responsibility'} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <AboutNav />
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']}  img={imgBg1}/>
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']}  img={imgBg1}/>
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']}  img={imgBg1}/>
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']}  img={imgBg1}/>
            
        </div>
    )
}
