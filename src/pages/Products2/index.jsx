import React from 'react'
import { Menu, Row, Col } from 'antd'
import { useNavigate } from "react-router-dom";

import './index.scss'
export default function Products2() {
    const navigate = useNavigate()

    const toProducts3 = () => {
        navigate('/home/products3', { state: {} })
    }
    return (
        <div className='products2'>
            <Row>
                <Col span={24}><div className="img_main">
                    <span className='titel'>
                        Pluggable Transceiver
                    </span>

                    <div className='bottom_direction'></div>
                </div></Col>

            </Row>
            <div className='nav'>
                <div className='left'>
                    <div className='home'></div>
                    <div className="link">
                        <span>Products</span>
                        <span>·</span>
                        <span>Pluggable Transceiver</span>

                    </div>

                </div>
                <div className='right'>
                    <div className='return'></div>
                    <div className="link">
                        <span>Previous</span>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className='title'>
                    Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+
                </div>
                <div className="infomation">
                    Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.
                </div>
                <div className='select'>
                    <Menu mode="horizontal" >
                        <Menu.Item key="1" >
                            <span>1G</span>
                        </Menu.Item>
                        <Menu.Item key="25" >
                            <span>25G</span>
                        </Menu.Item>
                        <Menu.Item key="40" >
                            <span>40G</span>
                        </Menu.Item>
                        <Menu.Item key="50" >
                            <span>50G</span>
                        </Menu.Item>
                        <Menu.Item key="100" >
                            <span>100G</span>
                        </Menu.Item>
                        <Menu.Item key="200" >
                            <span>200G</span>
                        </Menu.Item>
                        <Menu.Item key="400" >
                            <span>400G</span>
                        </Menu.Item>
                        <Menu.Item key="800" >
                            <span>800G</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
            <div className="solutions">
                <div className="solution">
                    <span className='title'>1G solutions</span>
                    <span className='item1'>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+</span>
                    <span className='item2'>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.</span>

                </div>
                <div className='items'>
                    <div className='item'>
                        <div className='img'></div>
                        <div className='info_item'>
                            <span>OSFP 2xLR4</span>
                            <span>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</span>
                            <span onClick={toProducts3}>READ MORE</span>

                        </div>
                    </div>
                    <div className='item'>
                        <div className='img'></div>
                        <div className='info_item'>
                            <span>OSFP 2xLR4</span>
                            <span>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</span>
                            <span onClick={toProducts3}>READ MORE</span>

                        </div>
                    </div>
                    <div className='item'>
                        <div className='img'></div>
                        <div className='info_item'>
                            <span>OSFP 2xLR4</span>
                            <span>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</span>
                            <span onClick={toProducts3}>READ MORE</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
