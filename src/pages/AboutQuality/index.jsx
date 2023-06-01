import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/aq_bg1.jpg'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import imgItem1 from '@/static/img/aq_item1.jpg'
import imgItem2 from '@/static/img/aq_item2.jpg'

import { Menu, Row, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import Http from "@/utils/http";
import ConstValue from "@/utils/value";


import './index.scss'
export default function AboutQuality() {
    const [quality, setQuality] = useState([]);

    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        let res = await Http.to.items("Certificate").readByQuery({
            sort: ['id'],
        });
        setQuality(res.data)
    }
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
                        {quality.map((item, index) => {
                            return (
                                <Col key={index}><div className='img_box'><img src={ConstValue.url + "assets/" + item?.img} alt="" /></div></Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}
