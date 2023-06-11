import { Row, Col } from 'antd'
import { LinkedinOutlined, MediumOutlined, EnvironmentOutlined, PhoneOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import './index.scss'
import imgBg from '@/static/svg/toTop.svg'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Http from "@/utils/http";

export default function Footer() {
    const [info, setInfo] = useState([])

    const toPage = (address, routerName) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

        navigate('/' + address);
        window.location.reload()

    }
    const navigate = useNavigate()
    useEffect(() => {
        getNextM();
    }, []);

    const getNextM = async () => {
        let res = await Http.to.items('menu_new').readByQuery({
            sort: ['id'],
        });
        setInfo(res.data);
        console.log(res.data);
    }
    return (
        <div className='com_footer'>
            <div className='to_top' onClick={
                () => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>
                <VerticalAlignTopOutlined

                    style={{ fontSize: '20px', color: '#fff' }} />
            </div>
            <div className='pc'>
                <div className="top">
                    <div className='content'>
                        <Row>

                            {info?.nextmenu?.map((item, index) => {
                                return (
                                    <Col key={index} xs={24} sm={12} md={6}>
                                        <div key={index} className='items' >
                                            <span className='title' onClick={()=>{toPage(item.link)}} >{item.menu}</span>
                                            {item.nextmenu.map((item2, index2) => {
                                                return (
                                                    <span onClick={(e)=>{ toPage(item2.link)}} key={index2} className='item'>{item2.menu}</span>

                                                )
                                            })}

                                        </div>
                                    </Col>
                                )
                            })}
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
                <ul style={{ listStyle: 'none' }} className="share">
                    <li><a href="https://www.linkedin.com/company/linktel/" className="icon-linkedin iconfont"><LinkedinOutlined style={{ fontSize: '30px' }} /></a></li>
                    <li><a href="http://www.linkteltech.com/index.php?r=site%2Fcontact#firve" className="icon-youxiang1 iconfont"><MediumOutlined style={{ fontSize: '30px' }} /></a></li>
                    <li><a href="http://www.linkteltech.com/index.php?r=site%2Fcontact#one" className="icon-dingwei1 iconfont"><EnvironmentOutlined style={{ fontSize: '30px' }} /></a></li>
                    <li><a href="http://www.linkteltech.com/index.php?r=site%2Fcontact" className="icon-dianhua iconfont"><PhoneOutlined style={{ fontSize: '30px' }} /></a></li>
                </ul>
                <div className="footer__b g-flex">
                    <p>Shenzhen Stock Exchange code: 301205</p>
                    <p className="g-flex">Copyright © 2023 Linktel Technologies Co., Ltd. All rights reserved <a id="top" className="icon-fanhuidingbu iconfont"></a></p>
                </div>
            </div>
        </div>
    )
}