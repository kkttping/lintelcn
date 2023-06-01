import React, { useEffect, useState } from 'react'

import Http from "@/utils/http";
import ConstValue from "@/utils/value";
import { useNavigate } from "react-router-dom";

import './index.scss'
export default function NavBottom(porps) {
    const [items, setItem] = useState([])
    const [info, setInfo] = useState([])

    const [items2, setItem2] = useState([])
    const navigate = useNavigate()

    const toPage = (address) => {
        navigate('/' + address);
        window.location.reload()
    }
    useEffect(() => {
        getNextM();
    }, []);

    const getNextM = async () => {
        let res = await Http.to.items('menu_new').readByQuery({
            sort: ['id'],
        });
        setInfo(res.data);
    }

    const productsPage = (
        <div className='products_nav'>
            {info?.nextmenu?.[0]?.nextmenu?.
                map((item,index) => {

                    return (
                        <div className='item' key={index} >
                            <div className='img' dangerouslySetInnerHTML={{ __html: item?.img }}></div>
                            <div className='title'>{item?.menu
}</div>
                            {item?.nextmenu?.map(item2 => {
                                return <p onClick={()=>toPage(item2?.link)}  key={item2.menuby}>{item2.menu}</p>
                            })}


                        </div>
                    )
                })}


        </div>
    );
    const aboutPage = (
        <div className='about_nav'>
            {info?.nextmenu?.[2]?.nextmenu?.map((item,index) => {

                return (
                    <div key={index} onClick={()=>toPage(item?.link)} >{item?.menu}</div>
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
            case 1: return productsPage;
            case 3: return aboutPage;

        }
    }
    return (
        <div className='nav_bottom'>
            {selectItem()}

        </div>
    )
}
