import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/aq_bg1.png'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import imgItem1 from '@/static/img/aq_item1.png'
import imgItem2 from '@/static/img/aq_item2.png'

import { Menu, Row, Col } from 'antd'


import './index.scss'
export default function AboutQuality() {

    return (
        <div className='about_quality'>
            <TopInfo imgBg={imgBg} title={'Quality'} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <AboutNav />
            <div className='content'>
                <div className='img_top'>
                    <img src={imgItem1} alt="" />
                </div>
                <div className='imgList'>
                    <Row justify={'center'}>
                        <Col>
                            <Row justify={'center'}>
                                <Col>
                                    <Row justify={'center'}>
                                        
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify={'center'}>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row justify={'center'}>
                                <Col>
                                    <Row justify={'center'}>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify={'center'}>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                        <Col><div className='img_box'><img src={imgItem2} alt="" /></div></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
