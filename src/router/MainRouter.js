import React from "react";
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

export default function () {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home/products" />} />
                    <Route path='home/*' element={<Home />}>
                        <Route path='products' element={<Products />}></Route>
                        <Route path='products2' element={<Products2 />}></Route>
                        <Route path='products3' element={<Products3 />}></Route>
                        <Route path='markets' element={<Markets />}></Route>
                        <Route path='markets2' element={<Markets2 />}></Route>
                        <Route path='markets3' element={<Markets3 />}></Route>
                        <Route path='about' element={<AboutHome />}></Route>
                        <Route path='company' element={<AboutCompany />}></Route>
                        <Route path='culture' element={<AboutCulture />}></Route>
                        <Route path='leadership' element={<AboutLeadership />}></Route>
                        <Route path='exhibition' element={<AboutNewsExhibition />}></Route>
                        <Route path='events' element={<AboutNewsEvents />}></Route>
                        <Route path='newsInfo' element={<AboutNewsInfo />}></Route>
                        <Route path='quality' element={<AboutQuality />}></Route>
                        <Route path='responsibility' element={<AboutResponsibility />}></Route>
                        <Route path='contact' element={<AboutContact />}></Route>
                        <Route path='career' element={<Career />}></Route>

                    </Route>
                </Routes>
            </Router>
        </div>

    )
}