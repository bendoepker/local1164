import Navbar from "./base_components/navbar/navbar";
import Footer from "./base_components/footer/footer";
import React from 'react';
import bg from "./default_bg.jpg";
import Image from "next/image";
import './globals.css';

export default function Home() {
    return (
        <div className="page_container">
            <Navbar />
            <div style={{flex: 1}}>
                <Image src={bg} alt="DEFAULT BACKGROUND" />
            </div>
            <Footer />
        </div>
    );
}
