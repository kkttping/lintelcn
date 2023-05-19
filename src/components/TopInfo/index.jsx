import React from 'react'
import Texty from 'rc-texty';
import { Row, Col } from 'antd'
import { LinkedinOutlined, MediumOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import './index.scss'
export default function TopInfo(props) {
	const { imgBg, title, info1, info2, styleSelf } = props;
	return (
		<div className='top_info'>
			<Row>
				<Col span={24}>
					<div className="img_main"
						style={{
							backgroundColor: styleSelf?.bgColor ?? '',
							height: styleSelf?.height ?? '720px'
						}}
					>
						<img src={imgBg} alt="" />
						<span className='titel'>
							<Texty interval={150} delay={500}>{title}</Texty>
						</span>
						<span>
							<Texty type="swing">{info1}</Texty>
						</span>
						<span>
							<Texty type="swing">{info2}</Texty>
						</span>
						<div className='bottom_direction'></div>
					</div>
				</Col>
			</Row>
		</div>
	)
}
