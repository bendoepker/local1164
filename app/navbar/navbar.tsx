import React from 'react';
import './navbar.css';

export default function Navbar(){
    return (
        <nav className="navbar">
            <a href="/" > Local 1164 </a>
            <ul>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}
