import React from 'react'
import './index.scss'
export default function CardPersonInfo(props) {
    const { title } = props;
    return (
        <div className='card_person_info'>
            <div className='content_info'>
                <div className="title">{title}</div>
                <div className="address"><div className='svg_address'></div>Ailsa Gong</div>
                <div className="phone"><div className='svg_phone'></div>+86 27 8792 9207</div>
                <div className="email"><div className='svg_email'></div>ailsagong@linkteltech.com<br/>Skype:ailsagong_linktel | AOL IM:ailsagong</div>
            </div>
        </div>
    )
}
