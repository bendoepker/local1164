import Navbar from "./base_components/navbar/navbar";
import Footer from "./base_components/footer/footer";
import React from 'react';
import bg from "./default_bg.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Footer />
            <div style={{flex: 1, position: "absolute"}}>
                <Image src={bg} alt="DEFAULT BACKGROUND" />
            </div>
            <Navbar />
        </div>
    );
}
