import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/an_bg2.png'
import NavLink from '@/components/NavLink'
import NewsNav from '@/components/NewsNav'
import CardNews2 from '@/components/CardNews2'
import imgBg1 from '@/static/img/an_item3.png'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './index.scss'
export default function AboutNewsEvents() {
    const navigate = useNavigate()


    const toPage = (address, info) => {
        navigate('/home/' + address+'/'+info);
    }
    return (
        <div className='about_news_events'>
            <TopInfo imgBg={imgBg} title={'News'} styleSelf={{ bgColor: '#000' }} />
            <NavLink />
            <NewsNav />
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} time={['03-04', '2023']} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']} img={imgBg1} />
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} time={['03-04', '2023']} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']} img={imgBg1} />
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} time={['03-04', '2023']} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']} img={imgBg1} />
            <CardNews2 link={() => toPage('newsInfo', 'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022')} time={['03-04', '2023']} title={'Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022'} infoList={['SAN Diego, Calif. — March 8, 2022，As the Optical Fiber Communication Conference kicks off, Linktel Technologies (Booth #2201) and MultiLane (Booth #3915) announce a successful …']} img={imgBg1} />
        </div>
    )
}
