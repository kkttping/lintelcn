import React, { useState } from 'react'
import './index.scss'
import { Menu, } from 'antd'
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer'
import NavBottom from '@/pages/Home/NavBottom'


export default function Home() {
    const [current, setCurrent] = useState('Products');
    const [currentIndex, setCurrentIndex] = useState(0);

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
            <div className="nav_home">
                <div className="tag">
                </div>
                <div className="menu">
                    <Menu onClick={menuonClick} mode="horizontal"  >
                        {items.map((item, index) => {
                            return <Menu.Item key={item.key}>
                                <div  onMouseOver={() => { setCurrentIndex(index) }}><span >{item.label}</span></div>
                            </Menu.Item>
                        })}
                    </Menu>
                </div>
                <div className="seach_icon">
                </div>
                <div ><div  style={(currentIndex === 0 || currentIndex === 2) ? { display: 'block' } : {}} className='nav_bottom_page'>< NavBottom type={currentIndex}/></div></div>
            </div>
            <div className="content" onMouseOver={() => { setCurrentIndex(-1) }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
