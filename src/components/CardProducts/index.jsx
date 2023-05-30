import React from 'react'
import './index.scss'
export default function CardProducts(props) {
  const {styleSelf,img,link,titleout,titleIn,info}=props;
  return (
    <div className='com_card_products' style={{ color: styleSelf?.color ?? '#000' }}>
      <div className='img'>
        <img src={img} alt="" style={{objectFit:styleSelf?.objectfit??'contain'}} />
      </div>
      <div className='name'><span >{titleout}</span></div>
      <div className='bg_lin'></div>
      <div className='bg_hover'>
        <span>{titleIn}</span>
        {info?.map(item=><span   dangerouslySetInnerHTML={{ __html:item}} key={item}></span>)}
        <span onClick={link}>READ MORE</span>
      </div>
    </div>
  )
}
