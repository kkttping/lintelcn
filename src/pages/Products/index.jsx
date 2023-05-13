import React from 'react'
import { Menu, Row, Col } from 'antd'
import CardProducts from '@/components/CardProducts'
import { useNavigate } from "react-router-dom";
import imgitem1 from '@/static/img/item1.png'
import imgitem2 from '@/static/img/item3.png'
import imgitem3 from '@/static/img/item4.png'

import './index.scss'
export default function Products() {
    const navigate = useNavigate()

    const toProducts2 = () => {
        navigate('/home/products2', { state: {} })
    }
    return (
        <div className='products'>
            <Row>
                <Col span={24}><div className="img_main">
                    <span className='titel'>
                        Products
                    </span>
                    <span>
                        A Solution and Service
                    </span>
                    <span>
                        Provider of High Speed Optical I/O Connectivity
                    </span>
                    <div className='bottom_direction'></div>
                </div></Col>
            </Row>
            <Row justify={"center"}>
                <Col  xl={24}  xxl={8} >
                    <div className='card_item'>
                        <CardProducts toProducts2={toProducts2} img={imgitem1}></CardProducts>
                    </div>
                </Col>
                <Col  xl={24}   xxl={8} >
                    <div className='card_item'>
                        <CardProducts toProducts2={toProducts2} img={imgitem2}></CardProducts>
                    </div>
                </Col>
                <Col xl={24}   xxl={8} >
                    <div className='card_item'>
                        <CardProducts toProducts2={toProducts2} img={imgitem3}></CardProducts>
                    </div>
                </Col>
            </Row></div>
    )
}
