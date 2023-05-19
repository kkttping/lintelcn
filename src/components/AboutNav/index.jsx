import React from 'react'
import { Menu, Row, Col } from 'antd'

import './index.scss'
export default function AboutNav() {
    return (

        <div className='about_nav'>

            <div className='select'>
                <Row justify={'center'}>
                    <Col xs={24} md={22} xl={16} xxl={12}>
                        <Menu mode="horizontal" >
                            <Menu.Item key="1" >
                                <span>Company</span>
                            </Menu.Item>
                            <Menu.Item key="25" >
                                <span>Culture</span>
                            </Menu.Item>
                            <Menu.Item key="40" >
                                <span>Leadership</span>
                            </Menu.Item>
                            <Menu.Item key="50" >
                                <span>Investors</span>
                            </Menu.Item>
                            <Menu.Item key="100" >
                                <span>News</span>
                            </Menu.Item>
                            <Menu.Item key="200" >
                                <span>Quality</span>
                            </Menu.Item>
                            <Menu.Item key="400" >
                                <span>Responsibility</span>
                            </Menu.Item>
                            <Menu.Item key="800" >
                                <span>Contact</span>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
