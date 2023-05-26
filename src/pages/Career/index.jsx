import React from 'react'
import { Menu, Row, Col } from 'antd'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/c1_bg1.png'
import imgitem1 from '@/static/img/c1_item1.png'
import imgitem2 from '@/static/img/c1_item2.png'
import CardProducts from '@/components/CardProducts'
import CardOpportunities from '@/components/CardOpportunities'

import { useNavigate } from "react-router-dom";

import './index.scss'
export default function Career() {
    const navigate = useNavigate()


    const toPage = (address, routerName) => {
        navigate('/' +routerName);
    }
    return (
        <div className='career'>
            <TopInfo imgBg={imgBg} title={'Markets'} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <div className='content'>
                <Row justify={"center"}>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('message', 'career') }} img={imgitem1} styleSelf={{ color: '#fff', objectfit: 'cover' }} titleout={"General Manager's Message"} titleIn={"General Manager's Message"} info={['12312313虚拟文字']} ></CardProducts>
                        </div>
                    </Col>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('workAtLinktel', 'career') }} img={imgitem2} styleSelf={{ color: '#fff', objectfit: 'cover' }} titleout={'Cultrue in Linktel'} titleIn={'Cultrue in Linktel'} info={['12312313虚拟文字']}></CardProducts>
                        </div>
                    </Col>
                </Row>
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
