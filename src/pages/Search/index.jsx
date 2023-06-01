import React, { useState } from 'react'
import './index.scss'
import { Row, Col, Form, Input } from 'antd';
import imgItem3 from '@/static/img/bg_3.jpg'
import { useEffect } from 'react';
import Http from "@/utils/http";
import ConstValue from "@/utils/value";
import {
  LoadingOutlined,VideoCameraAddOutlined

} from '@ant-design/icons';
export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchV, setSearchV] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [info, setinfo] = useState([]);

  useEffect(() => {
  }, [])
  const getInfo = async () => {
    if(searchValue===''){
      setinfo([])
      return 
    }
    setIsLoading(true)
    setSearchV(searchValue);
    let res = await Http.to.items('Pluggable_Transceiver').readByQuery({
      sort: ['id'],
      search: searchValue
    });
    setIsLoading(false)

    setinfo(res.data)
  }
  return (
    <div className='search'>
      <div className='top'>
        <div className='title'>search</div>
        <div className='search_box'><Input value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} placeholder={"Please enter keyword search"} /> <div className='button' onClick={() => getInfo()}><div className='svg'></div></div></div>
      </div>
      <div className='content'>
        <div className='title'>Search result:</div>
        <div>
        {(isLoading) ? <div className='loding_search'> <LoadingOutlined/> </div> :''}

          {
            info.map((item, index) => {
              return (
                <Row key={index} justify={'center'}>
                  <Col>
                    <img src={ConstValue.url + "assets/" + item?.image} alt="" /></Col>
                  <Col>
                    <div className='info_box'><div className='info_title' dangerouslySetInnerHTML={{__html:item?.name?.replace( RegExp(searchV,"g"), `<i class="color_c">${searchV}</i>`)}}></div>
                      <div className='info_text' dangerouslySetInnerHTML={{__html:item?.description?.replace( RegExp(searchV,"g"), `<b class="color_c">${searchV}</b>`)}}></div></div>
                    <span onClick={() => { }}>READ MORE</span>

                  </Col>
                </Row>
              )
            })}
          {info.length === 0 && (<div className='nothing'>Nothing found,please search again...</div>)

          }



        </div>
      </div>
    </div>

  )
}
