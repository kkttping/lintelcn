import React, { useState, useRef } from 'react'
import './index.scss'
import img_bg from '@/static/img/bg_3.png'
import { Carousel, Row, Col, Table } from 'antd'
import NavLink from '@/components/NavLink'

export default function Products3() {
    const [activtyKey, setActivtyKey] = useState(0);
    const carRfe = useRef();

    const selectArr = [{
        src: img_bg
    }, {
        src: img_bg
    }, {
        src: img_bg
    }]
    const columns = [

        {
            title: 'Part No.',
            dataIndex: 'address',
            key: '1',
            width: 79,
        },
        {
            title: 'Form Factor',
            dataIndex: 'address',
            key: '2',
            width: 79,
        },
        {
            title: 'Data Rate',
            dataIndex: 'address',
            key: '3',
            width: 79,
        },
        {
            title: 'Reach',
            dataIndex: 'address',
            key: '4',
            width: 79,
        },
        {
            title: 'Wavelength',
            dataIndex: 'address',
            key: '5',
            width: 79,
        },
        {
            title: 'Transmitter',
            dataIndex: 'address',
            key: '6',
            width: 79,
        },
        {
            title: 'Receiver',
            dataIndex: 'address',
            key: '7',
            width: 79,
        },
        {
            title: 'Interface',
            dataIndex: 'address',
            key: '8',
            width: 79,

        },
        {
            title: 'Temperature',
            dataIndex: 'address',
            key: '9',
            width: 79,

        },
        {
            title: 'Application',
            dataIndex: 'address',
            key: '10',
            width: 79,

        },
        {
            title: 'download',
            key: 'operation',
            fixed: 'right',
            width: 59,
            render: () => <a>action</a>,
        },
    ];
    const data = [
        {
            key: 1,
            name: `Edward 1`,
            age: 32,
            address: `London `,
        },
        {
            key: 1,
            name: `Edward 1`,
            age: 32,
            address: `London `,
        },
        {
            key: 1,
            name: `Edward 1`,
            age: 32,
            address: `London `,
        },
        {
            key: 2,
            name: `Edward 1`,
            age: 32,
            address: `London `,
        }
    ];
    const selectChange = (index) => {
        carRfe.current.goTo(index); setActivtyKey(index);
    }
    return (
        <div className='products3'>
            <NavLink />

            <div className='top_bg'>
                <div className='bg'><Carousel ref={carRfe} style={{ height: '100%' }} dots={false}  >
                    <div>
                        <img src={img_bg} alt="" />
                    </div>
                    <div>
                        <img src={img_bg} alt="" />
                    </div>
                    <div>
                        <img src={img_bg} alt="" />
                    </div>
                </Carousel ></div >
                <div className="select">
                    {selectArr.map((item, index) => {
                        return (
                            <div key={index} className={"item " + ((activtyKey === index) ? 'activtyitem' : '')} onClick={() => selectChange(index)}>
                                <img src={item.src} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='content'>
                <Row justify={'center'}>
                    <Col xs={24} sm={24} xl={8}>
                        <div className='left'>
                            <div className='title'>OSFP 2xLR4</div>
                            <div className='item_content'>Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.</div>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} xl={1}>
                        <div className='content_center'></div>
                    </Col>
                    <Col xs={24} sm={24} xl={8}>
                        <div className='right'>
                            <div className='item'>
                                <div className='title'>
                                    Features
                                </div>
                                <div className='item_content'>
                                    <p>Cooled 8x100Gb/s channels  CWDM EML TOSA</p>
                                    <p>Power dissipation less than 16W</p>
                                    <p>Single channels PIN photo detector</p>
                                    <p>Up to 2km on SMF</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='title'>
                                    Features
                                </div>
                                <div className='item_content'>
                                    <p>Cooled 8x100Gb/s channels  CWDM EML TOSA</p>
                                    <p>Power dissipation less than 16W</p>
                                    <p>Single channels PIN photo detector</p>
                                    <p>Up to 2km on SMF</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='table'>
                    <div className='table_content'>
                        <div className="title">SPECIFICATIONS</div>
                        <Table
                            columns={columns}
                            dataSource={data}
                            scroll={{ x: 1200 }}
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
