import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/c4_bg1.jpg'
import NavLink from '@/components/NavLink'
import CareerNav from '@/components/CareerNav'
import { Menu, Row, Col } from 'antd'
import CardOpportunities from '@/components/CardOpportunities'

import './index.scss'
export default function CareerOpportunities() {
    return (
        <div className='career_opportunities'>
            <TopInfo imgBg={imgBg} title={"Job opportunities"} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <CareerNav />
            <div className='content'>
                
                <Row justify={"center"}>
                    <Col  >
                        <div className='title_name'>Job opportunities</div>

                    </Col>
                    <Col  >
                        <div className='title_name'></div>

                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col  >
                        <Row justify={"center"}>
                            <Col  >
                                <div className='opportunities_item'>
                                    <CardOpportunities />
                                </div>
                            </Col>
                            <Col  >
                                <div className='opportunities_item'>
                                    <CardOpportunities />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col  >
                        <Row justify={"center"}>
                            <Col  >
                                <div className='opportunities_item'>
                                    <CardOpportunities />
                                </div>
                            </Col>
                            <Col  >
                                <div className='opportunities_item'>
                                    <CardOpportunities />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
