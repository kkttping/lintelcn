import React from 'react'
import { Row, Col } from 'antd'
import { LinkedinOutlined, MediumOutlined, EnvironmentOutlined, PhoneOutlined,VerticalAlignTopOutlined } from '@ant-design/icons';
import './index.scss'
import imgBg from '@/static/svg/toTop.svg'
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const toPage = (address, routerName) => {
        navigate('/' + address);
    }
    const navigate = useNavigate()

    return (
        <div className='com_footer'>
            <div className='to_top' onClick={
                            () => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })}>
            <VerticalAlignTopOutlined
            
            style={{ fontSize: '20px',color:'#fff' }} />
            </div>
            <div className='pc'>
                <div className="top">
                    <div className='content'>
                        <Row>
                            <Col xs={24} sm={12} md={6}>
                                <div className='items' onClick={() => toPage('products')}>
                                    <span className='title'>Products</span>
                                    <span className='item'>Pluggable Transceiver</span>
                                    <span className='item'>Optical Engine</span>
                                    <span className='item'>NPO or CPO</span>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <div className='items' onClick={() => toPage('markets')}>
                                    <span className='title'>Markets</span>
                                    <span className='item'>Products</span>
                                    <span className='item'>Application</span>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <div className='items' onClick={() => toPage('about')}>
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
                                <div className='items' onClick={() => toPage('career')}>
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
                    <Row justify={'space-between'}>
                        <Col xs={24} sm={6}><span className='item'>Shenzhen Stock Exchange code:301205</span></Col>
                        <Col xs={24} sm={6}><span className='item'>Copyright 2023 Linktel Technologise Co.,Ltd. All rights reserved</span><a onClick={
                            () => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })} className='svg' style={{ backgroundImage: `url(${imgBg})` }}></a></Col>
                    </Row>
                </div>
            </div>
            <div className='ph'>
                <div className='link' onClick={() => toPage('products')}>Products</div>
                <div className='link' onClick={() => toPage('technology')}>Technology</div>
                <div className='link' onClick={() => toPage('company')}>Company</div>
                <div className='link' onClick={() => toPage('career')}>Career</div>
                <div className='link' onClick={() => toPage('contact')}>Contact</div>
                <ul style={{ listStyle: 'none' }} class="share">
                    <li><a href="https://www.linkedin.com/company/linktel/" class="icon-linkedin iconfont"><LinkedinOutlined style={{ fontSize: '30px' }} /></a></li>
                    <li><a href="http://www.linkteltech.com/index.php?r=site%2Fcontact#firve" class="icon-youxiang1 iconfont"><MediumOutlined style={{ fontSize: '30px' }} /></a></li>
                    <li><a href="http://www.linkteltech.com/index.php?r=site%2Fcontact#one" class="icon-dingwei1 iconfont"><EnvironmentOutlined style={{ fontSize: '30px' }} /></a></li>
                    <li><a href="http://www.linkteltech.com/index.php?r=site%2Fcontact" class="icon-dianhua iconfont"><PhoneOutlined style={{ fontSize: '30px'  }} /></a></li>
                </ul>
                <div class="footer__b g-flex">
                    <p>Shenzhen Stock Exchange code: 301205</p>
                    <p class="g-flex">Copyright © 2023 Linktel Technologies Co., Ltd. All rights reserved <a id="top" class="icon-fanhuidingbu iconfont"></a></p>
                </div>
            </div>
        </div>
    )
}
