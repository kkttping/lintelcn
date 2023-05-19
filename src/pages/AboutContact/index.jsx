import React,{useEffect} from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/ah_bg2.png'
import NavLink from '@/components/NavLink'
import AboutNav from '@/components/AboutNav'
import CardPersonInfo from '@/components/CardPersonInfo'
import { Button, Checkbox, Form, Input } from 'antd';
import BMap  from 'BMap';
import './index.scss'
export default function AboutContact() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(()=>{
        var map = new BMap.Map("mapCurrent"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        console.log(map);
    },[])
    return (
        <div className='about_contact'>
            <TopInfo imgBg={imgBg} title={'Contact'} styleSelf={{ bgColor: '#000' }} info1={'A Solution and Service Provider'} info2={'of High Speed Optical I/O Connectivity'} />
            <NavLink />
            <AboutNav />
            <div className='content'>
                <div className='map' >
                    <div id='mapCurrent' ></div>
                    <div className="link">
                        <div>Headquarters</div>
                        <div>Linktel USA</div>
                        <div>Linktel Malaysia</div>
                    </div>
                    <div className='content_info'>
                        <div className="title"> Linktel Technologies Co., Ltd</div>
                        <div className="address"><div className='svg_address'></div>E12, No. 52 Liufang Road, East-Lake Hi-tech Development Zone, Wuhan, China
                            Postcode: 430223</div>
                        <div className="phone"><div className='svg_phone'></div>+86 27 8792 9298</div>
                        <div className="email"><div className='svg_email'></div>info@linkteltech.com     sales@linkteltech.com</div>
                    </div>
                </div>
                <div className='infomation'>
                    <div className="content_title">
                        Sales & Marketing
                    </div>
                    <div className='person_info'>
                        <CardPersonInfo title={'Overseas sales'} />
                    </div>
                    <div className='person_info'>
                        <CardPersonInfo title={'Domestic sales'} />
                    </div>
                    <div className='person_info'>
                        <CardPersonInfo title={'Marketing'} />
                    </div>
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
                                <Input placeholder={ "Your Name"} />
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
                                <Input placeholder="Your Email"/>
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
                                <Input.TextArea placeholder="Your Message"/>
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
