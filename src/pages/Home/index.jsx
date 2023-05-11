import React, { useState } from 'react'
import './index.scss'
import { Menu, Row, Col } from 'antd'
import CardProducts from '@/components/CardProducts'
export default function Home() {
    const [current, setCurrent] = useState('Products');
    const items = [
        {
            label: 'Products',
            key: 'Products',
        },
        {
            label: 'Markets',
            key: 'Markets',
        }, {
            label: 'About',
            key: 'About',
        }, {
            label: 'Career',
            key: 'Career',
        },

    ]
    const menuonClick = () => {

    }
    return (
        <div className='page_home'>
            <div className="nav">
                <div className="tag">
                </div>
                <div className="menu">
                    <Menu onClick={menuonClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </div>
                <div className="seach_icon">
                </div>
            </div>
            <div className="content">
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
                    <Col   >
                        <div className='card_item'>
                        <CardProducts></CardProducts>
                        </div>
                    </Col>
                    <Col  >
                        <div className='card_item'>
                        <CardProducts></CardProducts>
                        </div>
                    </Col>
                    <Col >
                        <div className='card_item'>
                        <CardProducts></CardProducts>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
