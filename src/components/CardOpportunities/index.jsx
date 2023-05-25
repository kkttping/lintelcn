import React, { useState } from 'react'
import './inderx.scss'
import { Modal, Row, Col } from 'antd'

export default function CardOpportunities() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='card_opportunities'>
            <div className='upload_svg'>
                <div className='name'>Apply</div>
            </div>
            <span onClick={() => { setIsModalOpen(true) }}>READ MORE</span>
            <div>
                <div className="title_tag">Position</div>
                <div className="title">Hardware development engineer</div>
            </div>

            <div className='infomation'>
                <div className='item'>
                    <div className='type'>Job Category</div>
                    <div className='info'>Full-time</div>
                </div>
                <div className='item'>
                    <div className='type'>Place</div>
                    <div className='info'>Wuhan</div>
                </div>
                <div className='item'>
                    <div className='type'>Hiring</div>
                    <div className='info'>5</div>
                </div>
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} width={720}>
                <div className='content'>
                    <div>
                        <div className="title">Hardware development engineer</div>
                    </div>

                    <div className='infomation'>
                        <div className='item'>
                            <div className='type'>Job Category</div>
                            <div className='info'>Full-time</div>
                        </div>
                        <div className='item'>
                            <div className='type'>Place</div>
                            <div className='info'>Wuhan</div>
                        </div>
                        <div className='item'>
                            <div className='type'>Hiring</div>
                            <div className='info'>5</div>
                        </div>
                    </div>
                    <div className='info2'>
                        <div className='info2_title'>Requirements</div>
                        <div className='info2_text'>
                            1. Mechanical automation or relevant professional automation, mechanical design and automation control design ability;<br /><br />

                            2. 2 university undergraduate course graduation;<br /><br />

                            3. Have strong ability of coordination communication.<br /><br />
                        </div>
                        <div className='info2_title'>Responsibility</div>
                        <div className='info2_text'>
                            1. The development of new products and tooling/fixture development;<br /><br />

                            2. New product NPI import;<br /><br />

                            3. Ensure the production batch production of new products, solve the technical problems of production line.<br /><br />
                        </div>
                     
                    </div>
                </div>

                <div>
                    <div className='upload_svg'>
                        <div className='name'>Apply <div className='svg'></div></div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
