import React from "react";
import logo from "../images/airbnb-group-photos.png";

export default function Hero(){
    return(
        <section className="hero">
            <img src={logo} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive vacations to several of our best places.</p>
        </section>
    )
}