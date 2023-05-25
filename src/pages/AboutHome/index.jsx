import React, { useState } from 'react'
import imgBg from '@/static/img/ah_bg1.png'
import TopInfo from '@/components/TopInfo'
import { Menu, Row, Col } from 'antd'
import imgitem1 from '@/static/img/ah_item1.png'
import imgitem2 from '@/static/img/ah_item2.png'
import imgitem3 from '@/static/img/ah_item3.png'
import imgitem4 from '@/static/img/ah_item4.png'
import imgitem6 from '@/static/img/ah_item6.png'
import imgitem7 from '@/static/img/ah_item7.png'

import imgText from '@/static/img/ah_text1.png'
import imgPerson from '@/static/img/ah_person1.png'

import CardProducts from '@/components/CardProducts'
import { useNavigate } from "react-router-dom";

import './index.scss'
export default function AboutHome() {
    const [imgSelect, setImgSelect] = useState(0);
    const navigate = useNavigate()


    const toPage = (address, routerName) => {
        navigate('/home/' + address);
    }
    const link = () => {

    }

    return (
        <div className='about_home'>
            <TopInfo imgBg={imgBg} title={'About'} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <div className='content'>
                <Row justify={"center"}>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('company', 'about') }} img={imgitem1} styleSelf={{ color: '#fff',objectfit:'cover' }} titleout={'Company '} titleIn={'Company '} info={['12312313虚拟文字']} ></CardProducts>
                        </div>
                    </Col>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('culture', 'about') }} img={imgitem2} styleSelf={{ color: '#fff',objectfit:'cover' }} titleout={'Culture '} titleIn={'Culture '} info={['12312313虚拟文字']}></CardProducts>
                        </div>
                    </Col>
                </Row>
                <div className='leadership'>
                    <Row justify={"center"}>
                        <Col sm={24} xl={12} >
                            <div className='human_img'>
                                <img src={imgitem3} alt="" />
                                <div className='name'>
                                    <img src={imgText} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col sm={24} xl={12} >
                            <div className='info'>
                                <div className="text">
                                    <div className='leadership_type'>Leadership</div>
                                    <div className='leadership_name'><div className='person_svg'></div>James Zhang</div>
                                    <div className='leadership_work'>President & CEO</div>
                                    <div className='leadership_info'>Founder, GM of Linktel <br />
                                        James is the chairman and general manager of Linktel.<br />
                                        James holds Bachelor's degree in electrical technology from Wuhan University of
                                        ... </div>
                                    <span onClick={() => { toPage('leadership', 'about') }}>READ MORE</span>

                                </div>
                                <div className="select_img">
                                    <div className={imgSelect === 0 ? 'select_img activty' : 'select_img'} onClick={() => setImgSelect(0)}><img src={imgPerson} alt="" /></div>
                                    <div className={imgSelect === 1 ? 'select_img activty' : 'select_img'} onClick={() => setImgSelect(1)}><img src={imgPerson} alt="" /></div>
                                    <div className={imgSelect === 2 ? 'select_img activty' : 'select_img'} onClick={() => setImgSelect(2)}><img src={imgPerson} alt="" /></div>
                                    <div className='img' onClick={() => { toPage('leadership', 'about') }}><img src={imgitem4} alt="" /></div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
                <Row justify={"center"}>
                    <Col sm={12} xl={6} >
                        <div className='card_item'>
                            <CardProducts link={() => {  }} img={imgitem6} styleSelf={{ color: '#fff',objectfit:'cover' }} titleout={'Investors'} titleIn={'Investors'} info={['12312313虚拟文字']} ></CardProducts>
                        </div>
                    </Col>
                    <Col sm={12} xl={6} >
                        <div className='card_item'>
                            <div className='news'>
                                <div className='news_title'>News</div>
                                <div className='time'>03-04,2023</div>
                                <div className='news_info'>Linktel and MultiLane <br /> Showcase a 2xFR4 OSFP<br /> Transceiver Demo with Live<br /> 800G BERT Traffic at OFC 2022</div>
                                <span onClick={() => { toPage('exhibition', 'about') }}>MORE</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('quality', 'about') }} img={imgitem7} styleSelf={{ color: '#fff',objectfit:'cover' }} titleout={'Quality'} titleIn={'Quality'} info={['12312313虚拟文字']}></CardProducts>
                        </div>
                    </Col>
                </Row>
                <div className='earth'>
                    <Row justify={"center"}>
                        <Col sm={24} xl={12} >
                            <div className='card_item_bottom'>
                                <div className='responsibility_title'>
                                    Responsibility
                                </div>
                                <div className='responsibility_info'>
                                    Linktel and MultiLane Showcase a 2xFR4 OSFP Transceiver Demo with Live 800G BERT Traffic at OFC 2022
                                </div>
                                <span onClick={() => { toPage('responsibility', 'about') }}>MORE</span>

                            </div>
                        </Col>
                        <Col sm={24} xl={12} >
                            <div className='card_item_bottom'>
                                <div className='contact_title'>
                                    Contact
                                </div>
                                <div className='contact_info'>
                                    Headquarters<br />
                                    Linktel USA<br />
                                    Linktel Malaysia
                                </div>
                                <span onClick={() => { toPage('contact', 'about') }}>MORE</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
