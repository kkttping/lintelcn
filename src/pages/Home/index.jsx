import React, { useState,useEffect } from 'react'
import './index.scss'
import { Menu, } from 'antd'
import { Outlet, useNavigate,useLocation } from 'react-router-dom';
import Footer from '@/components/Footer'
import NavBottom from '@/pages/Home/NavBottom'


export default function Home() {
    const [current, setCurrent] = useState('products');
    const [currentIndex, setCurrentIndex] = useState(-1);
    const navigate = useNavigate()
    const location = useLocation()

    const items = [
        {
            label: 'Products',
            key: 'products',
        },
        {
            label: 'Markets',
            key: 'markets',
        }, {
            label: 'About',
            key: 'about',
        }, {
            label: 'Career',
            key: 'career',
        },

    ]
    const menuonClick = (index) => {
        toPage(index.key)
        setCurrent(index.key)
    }
    const toPage = (address) => {
        navigate('/home/' + address, { state: {routerName:address} })
    }
    useEffect(()=>{
        if(location.state===null)return
        setCurrent(location.state.routerName);
        console.log(location.state.routerName);
    },[location])
    return (
        <div className='page_home'>
            <div className="nav_home">
                <div className="tag">
                </div>
                <div className="menu">
                    <Menu onClick={menuonClick} selectedKeys={[current]}  mode="horizontal"  >
                        {items.map((item, index) => {
                            return <Menu.Item key={item.key}>
                                <div onMouseOver={() => { setCurrentIndex(index) }}><span >{item.label}</span></div>
                            </Menu.Item>
                        })}
                    </Menu>
                </div>
                <div className="seach_icon">
                </div>
                <div ><div style={(currentIndex === 0 || currentIndex === 2) ? { display: 'block' } : {}} className='nav_bottom_page'>< NavBottom type={currentIndex} /></div></div>
            </div>
            <div className="content_home" onMouseOver={() => { setCurrentIndex(-1) }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
