import React, { useState,useEffect, useRef } from 'react'
import './index.scss'
import img_bg from '@/static/img/bg_3.jpg'
import { Carousel, Row, Col, Table } from 'antd'
import NavLink from '@/components/NavLink'
import { useParams } from 'react-router-dom';
import Http from "@/utils/http";
import {
    CloudDownloadOutlined
  } from '@ant-design/icons';
import ConstValue from "@/utils/value";
import { useNavigate } from "react-router-dom";

export default function Products3() {
    const [activtyKey, setActivtyKey] = useState(0);
    const carRfe = useRef();
    const getParams = useParams();
    const [info, setInfo] = useState({});
    const [info2, setInfo2] = useState([{}]);
    const navigate = useNavigate()

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
            dataIndex: 'part_no',
            key: '1',
            width: 79,
        },
        {
            title: 'Form Factor',
            dataIndex: 'form_factor',
            key: '2',
            width: 79,
        },
        {
            title: 'Data Rate',
            dataIndex: 'data_rate',
            key: '3',
            width: 79,
        },
        {
            title: 'Reach',
            dataIndex: 'reach',
            key: '4',
            width: 79,
        },
        {
            title: 'Wavelength',
            dataIndex: 'wavelength',
            key: '5',
            width: 79,
        },
        {
            title: 'Transmitter',
            dataIndex: 'transmitter',
            key: '6',
            width: 79,
        },
        {
            title: 'Receiver',
            dataIndex: 'receiver',
            key: '7',
            width: 79,
        },
        {
            title: 'Interface',
            dataIndex: 'interface',
            key: '8',
            width: 79,

        },
        {
            title: 'Temperature',
            dataIndex: 'temperature',
            key: '9',
            width: 79,

        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: '10',
            width: 79,

        },
        {
            title: 'download',
            key: 'operation',
            fixed: 'right',
            width: 59,
            render: () =><div className='download'><a onClick={()=>{download(ConstValue.url + "assets/" + info2[0]?.download)}} ><CloudDownloadOutlined /></a> </div> ,
        },
    ];
    function download(url = '', fileName = 'data') {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.setAttribute('target', '_blank');
        
        fileName && a.setAttribute('download', fileName);
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    const selectChange = (index) => {
        carRfe.current.goTo(index); setActivtyKey(index);
    }
    const toPage = (address, routerName) => {
        navigate('/' + address);
    }
    useEffect(() => {
        getInfo();
    }, []);
    const getInfo = async () => {
        let res = await Http.to.items("Pluggable_Transceiver/" + getParams?.id).readByQuery({
            sort: ['id'],
        });
        console.log(res.data);
        getInfo2(res.data.specification[0])
        setInfo(res.data)
    }
    const getInfo2 = async (id) => {
        let res = await Http.to.items("product_specifications/" + id).readByQuery({
            sort: ['id'],
        });
        setInfo2([{
            key: 1,
            ...res.data
        }])
        console.log(res.data);
    }
    const navInfo={
        '1':'Pluggable Transceiver',
        '2':'Optical Engine',
        '3':'NPO/CPO ELSFP & OE Connectivity'
    }
    return (
        <div className='products3'>
            <NavLink title1={'Products'} link1={()=>{toPage('products')}} title2={navInfo[getParams?.id2]} link2={()=>{toPage('products2/'+getParams?.id2)}} title3={info?.name} />

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
                            <div className='title'>{info?.name}</div>
                            <div className='item_content'>{info?.description}</div>
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
                                    {info?.features
}
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
                            dataSource={info2}
                            scroll={{ x: 1200 }}
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
