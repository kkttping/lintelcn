import React from 'react'
import './index.scss'
export default function NavLink() {
    return (
        <div className='nav_link'>
            <div className='nav'>
                <div className='left'>
                    <div className='home'></div>
                    <div className="link">
                        <span>Products</span>
                        <span>·</span>
                        <span>Pluggable Transceiver</span>
                    </div>
                </div>
                <div className='right' onClick={()=>window.history.back()}>
                    <div className='return'></div>
                    <div className="link">
                        <span>Previous</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
