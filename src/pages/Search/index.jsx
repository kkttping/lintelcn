import React from 'react'
import './index.scss'
import { Row, Col, Form, Input } from 'antd';
import imgItem3 from '@/static/img/bg_3.png'

export default function Search() {
  return (
    <div className='search'>
      <div className='top'>
        <div className='title'>search</div>
        <div className='search_box'><Input placeholder={"Please enter keyword search"} /> <div className='button'><div className='svg'></div></div></div>
      </div>
      <div className='content'>
        <div className='title'>Search result:</div>
        <div>
          <Row justify={'center'}>
            <Col>
              <img src={imgItem3} alt="" /></Col>
            <Col>
              <div className='info_box'><div className='info_title'>OSFP 2xFR4</div>
                <div className='info_text'> connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</div></div>
                <span onClick={()=>{}}>READ MORE</span>

            </Col>
          </Row>
          <Row justify={'center'}>
            <Col>
              <img src={imgItem3} alt="" /></Col>
            <Col>
              <div className='info_box'><div className='info_title'>OSFP 2xFR4</div>
                <div className='info_text'> connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP</div></div>
                <span onClick={()=>{}}>READ MORE</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>

  )
}
