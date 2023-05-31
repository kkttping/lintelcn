import React from 'react'
import './index.scss'
export default function CardPersonInfo(props) {
    const { title,name,email=[],phone } = props;
    console.log(email);
    return (
        <div className='card_person_info'>
            <div className='content_info'>
                <div className="title">{title}</div>
                <div className="address"><div className='svg_address'></div>{name}</div>
                <div className="phone"><div className='svg_phone'></div>{phone}</div>
                <div className="email"><div className='svg_email'></div>{email?.map((item=>{
                    return (
                        <span>{item.Email
                        }<br/></span>
                    )
                }))}</div>
            </div>
        </div>
    )
}
