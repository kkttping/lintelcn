import React from 'react'
import imgBg from '@/static/img/m_bg_1.png'
import TopInfo from '@/components/TopInfo'
import NavLink from '@/components/NavLink'
import CardNormal from '@/components/CardNormal'
import imgitem1 from '@/static/img/m2_item1.png'
import imgitem2 from '@/static/img/m2_item2.png'
import imgitem3 from '@/static/img/m2_item3.png'
import { useNavigate } from "react-router-dom";
import { Menu, Row, Col } from 'antd'
import './index.scss'
export default function Markets2() {
    const navigate = useNavigate()

    const toM3Link=(title)=>{
        navigate('/home/markets3/'+title)
    }

    return (
        <div className='markets2'>
            <TopInfo imgBg={imgBg} title={'Application'} styleSelf={{ bgColor: '#000', height: '400px' }} info1={''} info2={''} />
            <NavLink />
            <div className='content'>
                <Row justify={"center"}>
                    <Col sm={24} xl={8} xxl={6} >
                        <div className="caritem" onClick={()=>toM3Link('Telecom: Metro Wireless')}>
                            <CardNormal img={imgitem1} title={'Telecom: Metro Wireless'} />
                        </div>
                    </Col>
                    <Col sm={24} xl={8} xxl={6} >
                        <div className="caritem" onClick={()=>toM3Link('Data Center: Inside DC  DCI')}>
                            <CardNormal img={imgitem2}  title={'Data Center: Inside DC  DCI'} />
                        </div>
                    </Col>
                    <Col sm={24} xl={8} xxl={6} >
                        <div className="caritem" onClick={()=>toM3Link('Data Center: Inside DC  DCI')}>
                            <CardNormal img={imgitem3} title={'Data Center: Inside DC  DCI'} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
