import React from 'react'
import { Menu, Row, Col } from 'antd'
import CardProducts from '@/components/CardProducts'
import { useNavigate } from "react-router-dom";
import imgitem1 from '@/static/img/item1.png'
import imgitem2 from '@/static/img/item3.png'
import imgitem3 from '@/static/img/item4.png'
import imgBg from '@/static/img/bg_1.png'
import TopInfo from '@/components/TopInfo'

import './index.scss'
export default function Products() {
	const navigate = useNavigate()

	const toProducts2 = () => {
		navigate('/home/products2/products')
	}
	return (
		<div className='products'>
			<TopInfo
				imgBg={imgBg}
				title={'Products'}
				info1={'A Solution and Service'}
				info2={'Provider of High Speed Optical I/O Connectivity'}
			/>
			<Row justify={"center"}>
				<Col xl={24} xxl={8} >
					<div className='card_item'>
						<CardProducts
							link={toProducts2}
							img={imgitem1}
							info={['1.6T/3.2T NPO/CPO Optical Engines Optical/Electrical Hybrid Packaging Platforms']}
							titleIn={'NPO/CPO ELSFP & OE Connectivity'}
							titleout={'Pluggable Transceiver'}
						/>
					</div>
				</Col>
				<Col xl={24} xxl={8} >
					<div className='card_item'>
						<CardProducts link={toProducts2} img={imgitem2} info={['1.6T/3.2T NPO/CPO Optical Engines Optical/Electrical Hybrid Packaging Platforms']} titleIn={'NPO/CPO ELSFP & OE Connectivity'} titleout={'Pluggable Transceiver'}></CardProducts>
					</div>
				</Col>
				<Col xl={24} xxl={8} >
					<div className='card_item'>
						<CardProducts link={toProducts2} img={imgitem3} info={['1.6T/3.2T NPO/CPO Optical Engines Optical/Electrical Hybrid Packaging Platforms']} titleIn={'NPO/CPO ELSFP & OE Connectivity'} titleout={'Pluggable Transceiver'}></CardProducts>
					</div>
				</Col>
			</Row></div>
	)
}
