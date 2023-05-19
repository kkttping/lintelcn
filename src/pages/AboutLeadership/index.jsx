import React, { useState, useRef } from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/al_bg1.png'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import { Carousel, Row, Col } from 'antd'
import imgitem3 from '@/static/img/ah_item3.png'
import imgPerson from '@/static/img/al_item1.png'
import rightDir from '@/static/svg/right_dir2.svg'

import './index.scss'
export default function AboutLeadership() {
    const [imgSelect, setImgSelect] = useState(0);
    const carRfe = useRef();

    const add = () => {
        if (imgSelect >= 7) return;
        setImgSelect(imgSelect + 1);
        selectChange(imgSelect + 1)
    }
    const mius = () => {
        if (imgSelect <= 0) return;
        setImgSelect(imgSelect - 1);
        selectChange(imgSelect - 1)

    }
    const selectChange = (index) => {
        carRfe.current.goTo(index);
    }
    return (
        <div className='about_leadership'>
            <TopInfo imgBg={imgBg} title={'Leadership'} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <AboutNav />
            <div className='content'>
                <Row justify={"center"}>
                    <Col sm={24} xl={12} >
                        <div className='human_img'>
                            {/* <img src={imgitem3} alt="" /> */}
                            <div className='bg'>
                                <Carousel ref={carRfe} style={{ height: '100%' }} dots={false}  >
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgitem3} alt="" />
                                    </div>
                                </Carousel >
                            </div >
                            <div className='name'>
                                President & CEO
                                <div className='select_control'>
                                    <div className={'left'} onClick={mius} style={{ opacity: imgSelect === 0 ? 0.3 : 1 }} >
                                        <img src={rightDir} alt="" />
                                    </div>
                                    <div className='right' onClick={add} style={{ opacity: imgSelect === 7 ? 0.3 : 1 }}>
                                        <img src={rightDir} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} xl={12} >
                        <div className='infomation'>
                            <div className="name"><div className='person_svg'></div>James Zhang</div>
                            <div className='info'>
                                <div>Founder, GM of Linktel<br />
                                    James is the chairman and general manager of Linktel.<br />
                                    James holds Bachelor's degree in electrical technology from Wuhan University of technology and master's degree in Business Administration from Wuhan University.<br />
                                    He has decades of working experience on optical communication and rich experience in R & D and marketing.<br />
                                    James Participated in and host the first mock exam "smart Mini SFP module", "PON optical transceiver module", several projects of National 863 and so on.<br />
                                    James won many honors, such as the "second prize for scientific and technological progress of Hubei Province", "2014 China excellent innovation entrepreneur" and "3551 Optical Valley talent plan".<br /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="select">
                    <div className={imgSelect === 0 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(0);selectChange(0)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 1 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(1);selectChange(1)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 2 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(2);selectChange(2)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 3 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(3);selectChange(3)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 4 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(4);selectChange(4)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 5 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(5);selectChange(5)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 6 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(6);selectChange(6)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                    <div className={imgSelect === 7 ? 'select_img activty' : 'select_img'} onClick={() => {setImgSelect(7);selectChange(7)}}><img src={imgPerson} alt="" /><span>James Zhang</span></div>
                </div>
            </div>
        </div>
    )
}
