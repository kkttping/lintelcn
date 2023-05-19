import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/acu_bg1.png'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import CardCulture from '@/components/CardCulture'
import { Menu, Row, Col } from 'antd'
import imgItem1 from '@/static/img/acu_item1.png'
import imgItem2 from '@/static/img/acu_item2.png'
import imgItem3 from '@/static/img/acu_item3.png'
import imgItem4 from '@/static/img/acu_item4.png'

import './index.scss'
export default function AboutCulture() {
    return (
        <div className='about_culture'>
            <TopInfo imgBg={imgBg} title={'Company '} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <AboutNav />
            <Row justify={'center'}>
                <Col>
                    <Row justify={'center'}>
                        <Col >
                            <div className='card_item'><CardCulture title={'VISION'} infoList={['Become a world leading provider of integrated optical I/O Connectivity Solution and Service']} img={imgItem1} /> </div>
                        </Col>
                        <Col >
                            <div className='card_item'><CardCulture title={'MISSION'} infoList={['Create values for customers and realize dreams for employees']} img={imgItem2} /> </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row justify={'center'}>
                        <Col >
                        <div className='card_item'><CardCulture title={'PHILOSOPHY'} infoList={['Integrity, Innovation, Professionalism, Excellence']} img={imgItem3} /> </div>
                        </Col>
                        <Col >
                        <div className='card_item'><CardCulture title={'CORE VALUES'} infoList={['Be Earnest Do Best', 'Work Together Win Together']} img={imgItem4} /> </div>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </div>
    )
}
