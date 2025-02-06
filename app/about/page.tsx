import React from 'react';
import Navbar from "../base_components/navbar/navbar";
import Footer from '../base_components/footer/footer';
import '../globals.css';

export default function About(){
    return (
        <div className="page_container">
            <Navbar />
            <div style={{flex: 1}}/>
            <Footer />
        </div>
    )
}
