import { Menu, Row, Col } from 'antd'
import React,{useState,useEffect} from 'react'
import { Outlet, useNavigate,useLocation } from 'react-router-dom';

import './index.scss'
export default function AboutNav() {
    const [nav,setNav]=useState('');
    const navigate = useNavigate()
    useEffect(()=>{
       let infoArr= window.location.hash.split('/');
       if(infoArr.length===0)return;
       setNav(infoArr[infoArr.length-1])
    },[])
    const menuonClick = (index) => {
        toPage(index.key)
        setNav(index.key)
    }

    const toPage = (address) => {
        navigate('/home/' + address);
    }
    return (

        <div className='about_nav'>

            <div className='select'>
                <Row justify={'center'}>
                    <Col xs={24} md={22} xl={16} xxl={12}>
                        <Menu onClick={menuonClick} mode="horizontal" selectedKeys={[nav]}>
                            <Menu.Item key="company" >
                                <span>Company</span>
                            </Menu.Item>
                            <Menu.Item key="culture" >
                                <span>Culture</span>
                            </Menu.Item>
                            <Menu.Item key="leadership" >
                                <span>Leadership</span>
                            </Menu.Item>
                            <Menu.Item key="investors" >
                                <span>Investors</span>
                            </Menu.Item>
                            <Menu.Item key="exhibition" >
                                <span>News</span>
                            </Menu.Item>
                            <Menu.Item key="quality" >
                                <span>Quality</span>
                            </Menu.Item>
                            <Menu.Item key="responsibility" >
                                <span>Responsibility</span>
                            </Menu.Item>
                            <Menu.Item key="contact" >
                                <span>Contact</span>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
