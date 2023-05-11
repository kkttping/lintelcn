import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home'
import Footer from '@/components/Footer'

export default function () {
    return (
        <div>
            
            <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home/firstPage" />} />
                <Route path='home/*' element={<Home />}>
                </Route>
            </Routes>
        </Router>
        <Footer/>
        </div>
        
    )
}