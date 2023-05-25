import React from 'react'
import { Menu, Row, Col } from 'antd'
import imgBg2 from '@/static/img/an_item2.png'

import './index.scss'
export default function CardNews2(props) {
    const { title, infoList, img, time,link } = props
    return (
        <div className='card_news2'>
            <Row justify={'center'}>
                {time && 
                (<Col>
                    <div className='time'>
                        <span>{time?.[0]} <br/></span>
                        <span>{time?.[1]}</span>
                    </div>
                </Col>)
                }
                <Col>
                    <div className='infomation' style={{maxWidth:time?'700px':'1000px'}}>
                        <div className='title' style={{maxWidth:time?'700px':'850px'}}>{title}</div>
                        <div className='info' style={{maxWidth:time?'700px':'850px'}}>
                            {infoList?.map(item => {
                                return (<span key={item}>{item} <br /></span>)
                            })}
                        </div>
                        <span onClick={link}>READ MORE</span>

                    </div>
                </Col>
                <Col>
                    <div className='img'>
                        <img src={img} alt="" />
                    </div>
                </Col>
            </Row>


        </div>
    )
}
