import React, { useEffect, useState, useRef } from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/ah_bg2.jpg'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import CardPersonInfo from '@/components/CardPersonInfo'
import { Button, Checkbox, Form, Input } from 'antd';
// import BMap  from 'BMap';
import Http from "@/utils/http";
import ConstValue from "@/utils/value";

import './index.scss'
const googleMap = window.google && window.google.maps;
export default function AboutContact() {
    const [mapList, setMapList] = useState([]);
    const [linkList, setLinkList] = useState([]);

    const [selectMap, setSelectMap] = useState(0);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const mapRef = useRef()
    useEffect(() => {
        // var map = new BMap.Map("mapCurrent"); // 创建Map实例
        // map.centerAndZoom(new BMap.Point(103.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        // map.setCurrentCity(""); // 设置地图显示的城市 此项是必须设置的
        // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        // console.log(map);


        if (googleMap == undefined) return
        let mapProp = {
            center: new googleMap.LatLng(0, 0),
            zoom: 14,
            mapTypeId: googleMap.MapTypeId.ROADMAP,
        };
        mapRef.current = new googleMap.Map(document.getElementById("mapCurrent"), mapProp);

    }, [])
    useEffect(() => {
        getMapInfo();
        getInfo();
    }, []);
    useEffect(() => {
        if (mapList.length === 0) return
        mapRef.current?.setCenter(new googleMap.LatLng(mapList[selectMap]?.Positioning?.coordinates[1], mapList[selectMap]?.Positioning?.coordinates[0]))
    }, [selectMap])
    const getMapInfo = async () => {
        let res = await Http.to.items("office").readByQuery({
            sort: ['id'],
        });
        setMapList(res.data)
        res.data.forEach((item, index) => {
            if (index === 0) {
                mapRef.current?.setCenter(new googleMap.LatLng(item?.Positioning?.coordinates[1], item?.Positioning?.coordinates[0]))
            }
            if (googleMap === undefined) return
            new googleMap.Marker({
                position: {
                    lat: item?.Positioning?.coordinates[1]
                    , lng: item?.Positioning?.coordinates[0]
                },
                map: mapRef.current,
                title: ''

            });
        })
    }


    const getInfo = async () => {
        let res = await Http.to.items("Marketing_").readByQuery({
        });
        setLinkList(res.data)
        console.log(res.data);
    }
    return (
        <div className='about_contact'>
            <TopInfo imgBg={imgBg} title={'Contact'} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <AboutNav />
            <div className='content'>
                <div className='map' >
                    <div id='mapCurrent' ></div>
                    <div className="link">
                        {mapList.map((item, index) => {
                            return <div className={index === selectMap ? 'act' : ''} key={index} onClick={() => { setSelectMap(index) }}>{item?.Office}</div>
                        })}

                    </div>
                    <div className='content_info'>
                        <div className="title">{mapList[selectMap]?.Company}</div>
                        <div className="address"><div className='svg_address'></div>{mapList[selectMap]?.Address}</div>
                        <div className="phone"><div className='svg_phone'></div>{mapList[selectMap]?.Phone}</div>
                        <div className="email"><div className='svg_email'></div>{mapList[selectMap]?.Email}</div>
                    </div>
                </div>
                <div className='infomation'>
                    <div className="content_title">
                        Sales & Marketing
                    </div>
                    {linkList.map((item, index) => {
                        return (
                            <div key={index} className='person_info'>
                                <CardPersonInfo
                                    title={item?.Project}
                                    name={item?.contacts}
                                    phone
                                    ={item?.Phone
                                    }
                                    email={item?.Email}

                                />
                            </div>
                        )
                    })}

                    <div className="content_title">
                        Leave Your Message
                    </div>
                    <div className='form'>
                        <Form
                            name="basic"

                            style={{
                                Width: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input placeholder={"Your Name"} />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Your Email" />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder="Your Message" />
                            </Form.Item>
                            <Form.Item

                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
