import { Menu, Row, Col } from 'antd'
import { useNavigate } from "react-router-dom";
import imgBg from '@/static/img/bg_2.png'
import TopInfo from '@/components/TopInfo'
import NavLink from '@/components/NavLink'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Http from "@/utils/http";
import ConstValue from "@/utils/value";
import './index.scss'
export default function Products2() {
    const navigate = useNavigate()
    const getParams = useParams();
    const [info, setInfo] = useState({});

    const toProducts3 = () => {
        navigate('/products3')
    }
    useEffect(() => {
        getInfo();
        getInfo2();
    }, []);

    const getInfo = async () => {
        let res = await Http.to.items("CLASSIFICATION/" + getParams?.id).readByQuery({
            sort: ['id'],
        });
        setInfo(res.data)
    }
    const getInfo2 = async () => {
        let res = await Http.to.items("product_category").readByQuery({
            fields:['*']
        });
        console.log(res.data);
    }
    return (
        <div className='products2'>
            <TopInfo imgBg={imgBg} title={info?.name} styleSelf={{ bgColor: '#000', height: '400px' }} info1={''} info2={''} />
            <NavLink />

            <div className="info">
                <div className='infoma' dangerouslySetInnerHTML={{ __html: info?.text }}></div>
                {/* <div className='title'>
                    Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+
                </div>
                <div className="infomation">
                    Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.
                </div> */}
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
                <Row justify={'center'}>
                    <Col sm={24} xl={12}>
                        <div className="solution">
                            <span className='title'>1G solutions</span>
                            <span className='item1'>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+</span>
                            <span className='item2'>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.</span>
                        </div>
                    </Col>
                    <Col sm={24} xl={12}>
                        <div className='items'>
                            <div className='item'>
                                <Row justify={'center'}>
                                    <Col>
                                        <div className='img'></div>
                                    </Col>
                                    <Col>
                                        <div className='info_item'>
                                            <span>OSFP 2xLR4</span>
                                            <span>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</span>
                                            <span onClick={toProducts3}>READ MORE</span>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='item'>
                                <Row justify={'center'}>
                                    <Col>
                                        <div className='img'></div>
                                    </Col>
                                    <Col>
                                        <div className='info_item'>
                                            <span>OSFP 2xLR4</span>
                                            <span>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</span>
                                            <span onClick={toProducts3}>READ MORE</span>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>
        </div>
    )
}
