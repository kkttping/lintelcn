import React from 'react'
import imgitem1 from '@/static/img/item1.png'
import imgitem2 from '@/static/img/item3.png'
import imgitem3 from '@/static/img/item4.png'
import './index.scss'
export default function NavBottom(porps) {
    const productsPage = (
        <div className='products_nav'>
            <div className='item'>
                <img src={imgitem1} alt="" />
                <div className='title'>Pluggable Transceiver</div>
                <p>1G solutions</p>
                <p>25G solutions</p>
                <p>40G solutions</p>
                <p>50G solutions</p>
                <p>100G solutions</p>
                <p>200G solutions</p>
                <p>400G solutions</p>
                <p>800G solutions</p>
            </div>
            <div className='item'>
                <img src={imgitem2} alt="" />
                <div className='title'>Optical Engine</div>
                <p>Optical Engine Solution</p>
                <p>ELS Solution</p>
                <p>Passive Optical Components Solution</p>
            </div>
            <div className='item'>
                <img src={imgitem3} alt="" />
                <div className='title'>NPO/CPO ELSFP & OE Connectivity</div>
                <p>Replace with real classification in the later stage</p>
                <p>ELS Solution</p>
                <p>Passive Optical Components Solution</p>
            </div>
        </div>
    );
    const aboutPage = (
        <div className='about_nav'>
            <div>Company</div>
            <div>Culture</div>
            <div>Leadership</div>
            <div>Investors</div>
            <div>News</div>
            <div>Quality</div>
            <div>Responsibility</div>
            <div>Contact</div>

        </div>
    );
    const selectItem = () => {
        switch (porps.type) {
            case 0: return productsPage;
            case 2: return aboutPage;

        }
    }
    return (
        <div className='nav_bottom'>
            {selectItem()}

        </div>
    )
}
