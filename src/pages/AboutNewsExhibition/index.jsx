import React, { useEffect, useState } from 'react'
import TopInfo from '@/components/TopInfo'
import imgBg from '@/static/img/an_bg1.png'
import NavLink from '@/components/NavLink'
import NewsNav from '@/components/NewsNav'
import CardNews from '@/components/CardNews'
import imgBg1 from '@/static/img/an_item1.png'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Http from "@/utils/http";
import ConstValue from "@/utils/value";

import './index.scss'

export default function AboutNewsExhibition() {
    const navigate = useNavigate()
    const [info, setInfo] = useState([]);


    const toPage = (address, info) => {
        navigate('/' + address + '/' + info);
    }
    useEffect(() => {
        getInfo("New");
    }, []);

    const getInfo = async (url) => {
        let res = await Http.to.items(url).readByQuery({
            sort: ['id'],
            filter: {
                type
                    :
                    "Exhibition"
            }
        });
        let res2 = await Http.to.items("New_Content").readByQuery({
            sort: ['id'],
            fields: [' *,item.*'],
            filter: { 'collection': 'Img', }
        });
        let img = '';
        res.data.forEach((item0) => {
            item0.Content.forEach((item) => {
                res2?.data?.forEach((item2) => {
                    if (item === item2.id
                    ) {
                        img = item2?.item?.Img
                        item0.img = img;
                    }
                })
            })
        })


        setInfo(res.data);

        console.log(res.data)
    }

    return (
        <div className='about_news_exhibition'>
            <TopInfo imgBg={imgBg} title={'News'} styleSelf={{ bgColor: '#000' }} />
            <NavLink />
            <NewsNav />
            {info.map((item, index) => {
                return (
                    <CardNews key={index} link={() => toPage('newsInfo', item.id+'/'+item.type)} title={item.Title} infoList={item.Exhibition.split('/n')} img={ConstValue.url + "assets/" + item?.img} />

                )
            })}

        </div>
    )
}
