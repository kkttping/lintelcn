import React from 'react'
import { Menu, Row, Col } from 'antd'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/bg_4.png'
import imgitem1 from '@/static/img/m_item1.png'
import imgitem2 from '@/static/img/m_item2.png'
import CardProducts from '@/components/CardProducts'
import { useNavigate } from "react-router-dom";

import './index.scss'
export default function Markets() {
    const navigate = useNavigate()


    const toPage = (address, routerName) => {
        navigate('/home/' + address+'/'+routerName);
    }
    return (
        <div className='markets'>
            <TopInfo imgBg={imgBg} title={'Markets'} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <div className='content'>
                <Row justify={"center"}>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={()=>{toPage('products','products')}} img={imgitem1} styleSelf={{ color: '#fff',objectfit:'cover' }} titleout={'Products'} titleIn={'Products'} info={['12312313虚拟文字']} ></CardProducts>
                        </div>
                    </Col>
                    <Col sm={24} xl={12} >
                        <div className='card_item'>
                            <CardProducts link={()=>{toPage('markets2','markets')}} img={imgitem2} styleSelf={{ color: '#fff',objectfit:'cover' }} titleout={'Application'} titleIn={'Application'} info={['12312313虚拟文字']}></CardProducts>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
