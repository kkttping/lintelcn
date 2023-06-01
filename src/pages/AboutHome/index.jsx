import React, { useState, useEffect } from 'react'
import imgBg from '@/static/img/ah_bg1.jpg'
import TopInfo from '@/components/TopInfo'
import { Menu, Row, Col } from 'antd'
import imgitem1 from '@/static/img/ah_item1.jpg'
import imgitem2 from '@/static/img/ah_item2.jpg'
import imgitem3 from '@/static/img/ah_item3.jpg'
import imgitem4 from '@/static/img/ah_item4.jpg'
import imgitem6 from '@/static/img/ah_item6.jpg'
import imgitem7 from '@/static/img/ah_item7.jpg'

import imgText from '@/static/img/ah_text1.jpg'
import imgPerson from '@/static/img/ah_person1.jpg'

import CardProducts from '@/components/CardProducts'
import { useNavigate } from "react-router-dom";
import Http from "@/utils/http";
import ConstValue from "@/utils/value";
import './index.scss'
export default function AboutHome() {
    const [imgSelect, setImgSelect] = useState(0);
    const [leadershipList, setLeadershipList] = useState([]);

    const navigate = useNavigate()


    const toPage = (address, routerName) => {
        navigate('/' + address);
    }
    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        let res = await Http.to.items("Leadership").readByQuery({
            sort: ['id'],
        });
        setLeadershipList(res.data)
        console.log(res);
    }

    return (
        <div className='about_home'>
            <TopInfo imgBg={imgBg} title={'About'} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <div className='content'>
                <Row justify={"center"}>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('company', 'about') }} img={imgitem1} styleSelf={{ color: '#fff', objectfit: 'cover' }} titleout={'Company '} titleIn={'Company '} info={['12312313虚拟文字']} ></CardProducts>
                        </div>
                    </Col>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={() => { toPage('culture', 'about') }} img={imgitem2} styleSelf={{ color: '#fff', objectfit: 'cover' }} titleout={'Culture '} titleIn={'Culture '} info={['12312313虚拟文字']}></CardProducts>
                        </div>
                    </Col>
                </Row>
                <div className='leadership'>
                    <Row justify={"center"}>
                        <Col sm={24} xl={12} >
                            <div className='human_img'>
                                <img src={ConstValue.url + "assets/" + leadershipList[imgSelect]?.Img} alt="" />
                                <div className='name'>
                                    <img src={imgText} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col sm={24} xl={12} >
                            <div className='info'>
                                <div className="text">
                                    <div className='leadership_type'>Leadership</div>
                                    <div className='leadership_name'><div className='person_svg'></div>{leadershipList[imgSelect]?.Name}</div>
                                    <div className='leadership_work'>{leadershipList[imgSelect]?.Position}</div>
                                    <div className='leadership_info' dangerouslySetInnerHTML={{ __html: leadershipList[imgSelect]?.Introduce?.replace(/\n/g, "<br/>") }}></div>
                                    <span onClick={() => { toPage('leadership', leadershipList[imgSelect]?.id) }}>READ MORE</span>

                                </div>
                                <div className="select_img">
                                    {leadershipList.map((item, index) => {
                                        return (
                                            <div className={imgSelect === index ? 'select_img activty' : 'select_img'} onClick={() => setImgSelect(index)}><img src={ConstValue.url + "assets/" + item?.Thumbnail

                                        } alt="" /></div>

                                        )
                                    })}
                                    
                                    <div className='img' onClick={() => { toPage('leadership', 'about') }}><img src={imgitem4} alt="" /></div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
                <Row justify={"center"}>
                    <Col sm={12} xl={6} >
                        <div className='card_item'>
                            <CardProducts link={() => { }} img={imgitem6} styleSelf={{ color: '#fff', objectfit: 'cover' }} titleout={'Investors'} titleIn={'Investors'} info={['12312313虚拟文字']} ></CardProducts>
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
                            <CardProducts link={() => { toPage('quality', 'about') }} img={imgitem7} styleSelf={{ color: '#fff', objectfit: 'cover' }} titleout={'Quality'} titleIn={'Quality'} info={['12312313虚拟文字']}></CardProducts>
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
