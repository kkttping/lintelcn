import React, { useEffect, useState } from 'react'

import Http from "@/utils/http";
import ConstValue from "@/utils/value";
import { useNavigate } from "react-router-dom";

import './index.scss'
export default function NavBottom(porps) {
    const [items, setItem] = useState([])
    const [items2, setItem2] = useState([])
    const navigate = useNavigate()

    const toPage = (address) => {
        navigate('/' +address);
    }
    useEffect(() => {
        getNextM();
        getNextM2();
    }, []);

const getNextM = async () => {
    let res = await Http.to.items('menu_Menu_next').readByQuery({
        sort: ['id'],
        fields: ['item:menu.Menu', 'item:menu.Heroimg', 'item:menu.id'],
        filter: { "menu_id": "1" }
    });
    let arr = []
    for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].item !== null) {
            let res2 = await Http.to.items('menu_Menu_next').readByQuery({

                filter: { "menu_id": res.data[i].item.id + '' }
            });
            res.data[i].list = res2.data;
            arr.push(res.data[i]);
        }
    }
    console.log(arr);
    window.imgArr=arr;
    setItem(arr);
}
const getNextM2 = async () => {
    let res = await Http.to.items('menu_Menu_next').readByQuery({
        sort: ['id'],
        fields: ['item:menu.Menu', 'item:menu.Heroimg', 'item:menu.id'],
        filter: { "menu_id": "8" }
    });
    let arr = []
    for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].item !== null) {
            arr.push(res.data[i]);
        }
    }
    setItem2(arr);
}
const productsPage = (
    <div className='products_nav'>
        {items.map((item) => {

            return (
                <div className='item' key={item?.item?.id} >
                    <div className='img' style={{ backgroundImage: `url(${ConstValue.url + "assets/" + item.item?.Heroimg})` }}></div>
                    <div className='title'>{item.item?.Menu}</div>
                    {item?.list?.map(item2 => {
                        return <p key={item2.item}>{item2.item}G solutions</p>
                    })}


                </div>
            )
        })}


    </div>
);
const aboutPage = (
    <div className='about_nav'>
        {items2.map((item) => {

            return (
                <div key={item?.item?.Menu} onClick={()=>toPage(item?.item?.Menu?.toLowerCase())}>{item?.item?.Menu}</div>
            )
        })}
        {/* <div>Company</div>
            <div>Culture</div>
            <div>Leadership</div>
            <div>Investors</div>
            <div>News</div>
            <div>Quality</div>
            <div>Responsibility</div>
            <div>Contact</div> */}

    </div>
);
const selectItem = () => {
    switch (porps.type) {
        case 0: return productsPage;
        case 3: return aboutPage;

    }
}
return (
    <div className='nav_bottom'>
        {selectItem()}

    </div>
)
}
