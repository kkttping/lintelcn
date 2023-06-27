import React from 'react'
import './index.scss'
export default function CardNormal(props) {
    const { img, title } = props;
    return (
        <div className='card_normal'>
            <img crossOrigin="anonymous" src={img} alt="" />
            <div className='title'>{title}</div>
        </div>
    )
}
