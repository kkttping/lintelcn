import React from 'react'
import { Row, Col } from 'antd'
import { LinkedinOutlined, MediumOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import './index.scss'
export default function Footer() {
    return (
        <div className='com_footer'>
            <div className="top">
                <div className='content'>
                    <Row>
                        <Col xs={24} sm={12} md={6}>
                            <div className='items'>
                                <span className='title'>Products</span>
                                <span className='item'>Pluggable Transceiver</span>
                                <span className='item'>Optical Engine</span>
                                <span className='item'>NPO or CPO</span>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className='items'>
                                <span className='title'>Markets</span>
                                <span className='item'>Products</span>
                                <span className='item'>Application</span>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className='items'>
                                <span className='title'>About</span>
                                <span className='item'>Company</span>
                                <span className='item'>Culture</span>
                                <span className='item'>Leadership</span>
                                <span className='item'>Investors</span>
                                <span className='item'>News</span>
                                <span className='item'>Quality</span>
                                <span className='item'>Social Responsibility</span>
                                <span className='item'>Contact</span>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className='items'>
                                <span className='title'>Career</span>
                                <span className='item'>GM's Message</span>
                                <span className='item'>Work At Linktel</span>
                                <span className='item'>Job Opportunities</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="link">
                    <Row>
                        <Col xs={24} sm={12} md={6} ><LinkedinOutlined style={{ fontSize: '30px' }} /></Col>
                        <Col xs={24} sm={12} md={6} ><MediumOutlined style={{ fontSize: '30px' }} /></Col>
                        <Col xs={24} sm={12} md={6} ><EnvironmentOutlined style={{ fontSize: '30px' }} /></Col>
                        <Col xs={24} sm={12} md={6} ><PhoneOutlined style={{ fontSize: '30px' }} /></Col>

                    </Row>
                </div>
            </div>
            <div className="bottom">
                <Row>
                    <Col xs={24} sm={12}><span className='item'>Shenzhen Stock Exchange code:301205</span></Col>
                    <Col xs={24} sm={12}><span className='item'>Copyright 2023 Linktel Technologise Co.,Ltd. All rights reserved</span></Col>
                </Row>



            </div>
        </div>
    )
}
