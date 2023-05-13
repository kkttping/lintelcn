import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Products2 from '@/pages/Products2'
import Products3 from '@/pages/Products3'


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
                    </Route>
                </Routes>
            </Router>
        </div>

    )
}