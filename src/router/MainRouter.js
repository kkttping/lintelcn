import React, { useEffect } from "react";
import Http from "@/utils/http";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Products2 from '@/pages/Products2'
import Products3 from '@/pages/Products3'
import Markets from '@/pages/Markets'
import Markets2 from '@/pages/Markets2'
import Markets3 from '@/pages/Markets3'
import AboutHome from '@/pages/AboutHome'
import AboutCompany from '@/pages/AboutCompany'
import AboutCulture from '@/pages/AboutCulture'
import AboutLeadership from '@/pages/AboutLeadership'
import AboutNewsExhibition from '@/pages/AboutNewsExhibition'
import AboutNewsEvents from '@/pages/AboutNewsEvents'
import AboutNewsInfo from '@/pages/AboutNewsInfo'
import AboutQuality from '@/pages/AboutQuality'
import AboutResponsibility from '@/pages/AboutResponsibility'
import AboutContact from '@/pages/AboutContact'
import Career from '@/pages/Career'
import CareerMessage from '@/pages/CareerMessage'
import CareerWorkAtLinktel from '@/pages/CareerWorkAtLinktel'
import CareerOpportunities from '@/pages/CareerOpportunities'
import HomePage from '@/pages/HomePage'

export default function () {

	useEffect(() => {
		getInfo();
	}, []);

	const getInfo = async () => {
		let res = await Http.to.items("Basic_information").readByQuery({
			sort: ['id'],
			fields: [
				"id",
				"Project_Name",
				"description",
				"Copyright"
			]
		});
		console.log(res.data)
	}

	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home/products" />} />
					<Route path='home/*' element={<Home />}>
						<Route path='products/:address' element={<Products />}></Route>
						<Route path='products2/:address' element={<Products2 />}></Route>
						<Route path='products3/:address' element={<Products3 />}></Route>
						<Route path='markets/:address' element={<Markets />}></Route>
						<Route path='markets2/:address' element={<Markets2 />}></Route>
						<Route path='markets3/:address/:title' element={<Markets3 />}></Route>
						<Route path='about/:address' element={<AboutHome />}></Route>
						<Route path='company/:address' element={<AboutCompany />}></Route>
						<Route path='culture/:address' element={<AboutCulture />}></Route>
						<Route path='leadership/:address' element={<AboutLeadership />}></Route>
						<Route path='exhibition/:address' element={<AboutNewsExhibition />}></Route>
						<Route path='events/:address' element={<AboutNewsEvents />}></Route>
						<Route path='newsInfo/:address/:title' element={<AboutNewsInfo />}></Route>
						<Route path='quality/:address' element={<AboutQuality />}></Route>
						<Route path='responsibility/:address' element={<AboutResponsibility />}></Route>
						<Route path='contact/:address' element={<AboutContact />}></Route>
						<Route path='career/:address' element={<Career />}></Route>
						<Route path='message/:address' element={<CareerMessage />}></Route>
						<Route path='workAtLinktel/:address' element={<CareerWorkAtLinktel />}></Route>
						<Route path='opportunities/:address' element={<CareerOpportunities />}></Route>
						<Route path='home/:address' element={<HomePage />}></Route>

					</Route>
				</Routes>
			</Router>
		</div>

	)
}