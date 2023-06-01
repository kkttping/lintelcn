import React, { useEffect, useState } from 'react'
import NavLink from '@/components/NavLink'
import { useParams } from 'react-router-dom';
import imgitem from '@/static/img/an_item3.jpg'
import Http from "@/utils/http";
import ConstValue from "@/utils/value";

import './index.scss'
export default function AboutNewsInfo() {
    const [info, setInfo] = useState({});

    const getParams = useParams();
    useEffect(() => {
        getInfo("New/" + getParams?.id);
    }, []);

    const getInfo = async (url) => {
        let res = await Http.to.items(url).readByQuery({
            sort: ['id'],
            fields: ['*'],

            filter: {
                type
                    :
                    getParams?.type
            }
        });
        console.log(res.data);
        let res2 = await Http.to.items("New_Content").readByQuery({
            sort: ['id'],
            fields: [' *,item.*'],
            filter: { 'collection': 'Img', }
        });
        let res3 = await Http.to.items("New_Content").readByQuery({
            sort: ['id'],
            fields: ['*,item.*'],
            filter: { 'collection': 'Text', }
        }); 
        console.log(res3);

        res.data.Content.forEach((item) => {
            res2?.data?.forEach((item2) => {
                if (item === item2.id
                ) {
                    res.data.img = item2?.item?.Img;
                }
            })
            res3?.data?.forEach((item2) => {
                if (item === item2.id
                ) {
                    
                    res.data.text1 = item2?.item?.Text;
                }
            })
        })


        setInfo(res.data);

    }
    const timeSet = (num) => {
        if (num < 10) {
            return '0' + num;
        }
        return num
    }
    return (
        <div className='about_news_info'>
            <NavLink />
            <div className='title'>
                <div className='title_box'>
                    {info?.date_created && <div className='time'>

                        <span>{timeSet((new Date(info?.date_created)).getMonth())}-{timeSet((new Date(info?.date_created)).getDay())}<br /></span>
                        <span >{(new Date(info?.date_created)).getFullYear()}</span>

                    </div>}

                    <div className='title_info'>{info?.Title}</div>

                    <div className='title_ps' dangerouslySetInnerHTML={{ __html: info?.Exhibition?.replace(/\n/g, "<br/>") }}>

                    </div>
                </div>

            </div>
            <div className='info'>
                {info?.text1}
            </div>
            <div className='img'>
                <img src={ConstValue.url + "assets/" + info?.img} alt="" />
            </div>
            {/* <div className='info'>
                Linktel’s family of 800G transceivers accelerate data connectivity for data center Interconnection and Metro Networks. Our complete product line includes OSFP 2xFR4，OSFP 2xLR4，QSFP-DD DR8，QSFP-DD DR8+，QSFP-DD DR8++ series for applications up to 800 Gb/s. Each transceiver solution leverages Linktel's optoelectronic Integration technology for the transmission of data while reducing the size and power dissipation of traditional high speed design.
            </div> */}
        </div>
    )
}
