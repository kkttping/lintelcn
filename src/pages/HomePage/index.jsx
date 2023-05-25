import React, { useState, useRef } from 'react'
import './index.scss'
import img_bg from '@/static/img/h1_bg1.png'
import { Carousel, Row, Col, Table } from 'antd'
export default function HomePage() {
        const [activtyKey, setActivtyKey] = useState(0);
    const carRfe = useRef();

    const selectArr = [{
        name: 'Linktel',
    }, {
        name: 'Products',
    }, {
        name: 'Global',
    },{
        name: 'News',
    }]

    const selectChange = (index) => {
        carRfe.current.goTo(index); setActivtyKey(index);
    }
  return (
    <div className='home_page'>
        <div className='top_bg'>
                <div className='bg'><Carousel ref={carRfe} style={{ height: '100%' }} dots={false}  >
                    <div className='img_box'>
                        <img src={img_bg} alt="" />
                    </div>
                    <div className='img_box'>
                        <img src={img_bg} alt="" />
                    </div>
                    <div className='img_box'>
                        <img src={img_bg} alt="" />
                    </div>
                </Carousel ></div >
                <div className="select">
                    {selectArr.map((item, index) => {
                        return (
                            <div key={index} className={"item " } onClick={() => selectChange(index)}>
                                <div className={'title_name '+ ((activtyKey === index) ? 'activtyitem' : '')}>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
    </div>
  )
}
