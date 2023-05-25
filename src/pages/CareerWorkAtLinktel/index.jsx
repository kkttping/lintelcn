import React from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/c2_bg1.png'
import imgitem from '@/static/img/c3_item1.png'
import imgitem2 from '@/static/img/c3_item2.png'

import NavLink from '@/components/NavLink'
import CareerNav from '@/components/CareerNav'
import { Menu, Row, Col } from 'antd'

import './index.scss'
export default function CareerWorkAtLinktel() {
    return (
        <div className='career_work_at_linktel'>
            <TopInfo imgBg={imgBg} title={"GM's Message"} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <CareerNav />
            <div className='content'>
                <div className="title">
                    Linktel Technologies is full of youth and energy. The environment, systems and codes of conduct here embody the concept of "People First".
                </div>

                <Row justify={'center'}>
                    <Col>
                        <div className='img'><img src={imgitem} alt="" /></div>

                    </Col>
                    <Col>
                        <div className='img'><img src={imgitem2} alt="" /></div>

                    </Col>
                    <Col>
                        <div className='img'><img src={imgitem} alt="" /></div>

                    </Col>
                </Row>
                <div className='info'>
                    We provide stages and training opportunities for those employees who are ambitious, capable, and responsible, as well as provide generous returns and honors to who offer value added to our customers. We believe in that Linktel is our spiritual home, we encourage trust, respect, support and compete each other. We came together because of the high recognition of Linktel corporation culture, growing and developing together. Through unremitting efforts, we are building Linktel Technologies into a first-class optical device supplier in the world. </div>
                <div className='info2'>
                    1. Young and energetic<br/>
                    2. Honest and ingenuous<br/>
                    3. Ambitious<br/>
                    4. Friendly and warm-hearted<br/>
                    5. Positive outlook on life and values<br/>
                    6. Mature and responsible<br/>
                    7. Be held accountable for the actions<br/>
                    8. Concentrated on increasing value<br/>
                    9. United and cooperative<br/>
                    10. Sharing the bitter and the sweet<br/>
                </div>
                <div className='title2'>
                    Compensation & Benefits
                </div>
                <div className='info3'>
                    A comfortable and nice office<br/>
                    Professional internal and external training with a perfect career development plan<br/>
                    Competitive salaries and annual merit increase<br/>
                    A robust social insurance and housing fund<br/>
                    A flexible work time for businesses<br/>
                    Working meals for overtime work and free parking<br/>
                    Annual travel prepared for the staff<br/>
                    Abundant recreational activities<br/>
                    Festive presents and bonuses<br/>

                </div>
            </div>

        </div>
    )
}