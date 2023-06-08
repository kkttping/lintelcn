import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/acu_bg1.jpg'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import CardCulture from '@/components/CardCulture'
import { Menu, Row, Col } from 'antd'
import imgItem3 from '@/static/img/acu_item3.jpg'
import React, { useState, useEffect } from 'react'
import Http from "@/utils/http";
import ConstValue from "@/utils/value";
import { useNavigate } from "react-router-dom";

import './index.scss'
export default function AboutCulture() {
    const [cultureList, setCultureList] = useState([]);
    const navigate = useNavigate()
    const toPage = (address, routerName) => {
        navigate('/' +address);
    }
    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        let res = await Http.to.items("Culture").readByQuery({
            sort: ['id'],
        });
        setCultureList(res.data)
        console.log(res.data);
    }
    return (
        <div className='about_culture'>
            <TopInfo imgBg={imgBg} title={'Culture '} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink title1={'About'} link1={()=>{toPage('about')}} title2={'Culture'}/>
            <AboutNav />
            <Row justify={'center'}>
                {cultureList.map((item, index) => {
                    return (
                        <Col key={index}>
                            <div className='card_item'><CardCulture title={item?.title} infoList={[item?.text]} img={ConstValue.url + "assets/" + item?.img
                            } /> </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
