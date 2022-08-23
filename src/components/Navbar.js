import React from 'react';
import  reactLogo  from "../images/logo192.png";

export function Navbar(){
    return (
        <nav>
            <ReactFacts />
            <h2>React Course - Project 1</h2>
        </nav>
    )
}

function ReactFacts() {
    return(
        <>
            <img src={reactLogo} alt="" />
            <h1>ReactFacts</h1>
        </>
    )
}