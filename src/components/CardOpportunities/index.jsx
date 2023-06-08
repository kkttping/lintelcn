import React, { useState } from 'react'
import './inderx.scss'
import { Modal, Row, Col } from 'antd'

export default function CardOpportunities(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { data } = props;
    return (
        <div className='card_opportunities'>
            <div className='upload_svg'>
                <div className='name'>Apply</div>
            </div>
            <span className='read_more' onClick={() => { setIsModalOpen(true) }}>READ MORE</span>
            <div>
                <div className="title_tag">Position</div>
                <div className="title">{data?.position}</div>
            </div>

            <div className='infomation'>
                <div className='item'>
                    <div className='type'>country</div>
                    <div className='info'>{data?.country}</div>
                </div>
                <div className='item'>
                    <div className='type'>Place</div>
                    <div className='info'>{data?.Place}</div>
                </div>
                <div className='item'>
                    <div className='type'>Hiring</div>
                    <div className='info'>{data?.Hiring}</div>
                </div>
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} width={720}>
                <div className='content'>
                    <div>
                        <div className="title">Hardware development engineer</div>
                    </div>

                    <div className='infomation'>
                        <div className='item'>
                            <div className='type'>country</div>
                            <div className='info'>{data?.country}</div>
                        </div>
                        <div className='item'>
                            <div className='type'>Place</div>
                            <div className='info'>{data?.Place}</div>
                        </div>
                        <div className='item'>
                            <div className='type'>Hiring</div>
                            <div className='info'>{data?.Hiring}</div>
                        </div>
                    </div>
                    <div className='info2'>
                        <div className='info2_title'>Requirements</div>
                        <div className='info2_text'>
                            {data?.Requirements}
                        </div>
                        <div className='info2_title'>Responsibility</div>
                        <div className='info2_text'>
                            {data?.Responsibility}
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
