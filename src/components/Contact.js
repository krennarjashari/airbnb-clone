import React from "react";
import logo from "../images/airbnb-logo.png"
import logostar from "../images/star.png"

export default function Contact(props){
    return(
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={logostar}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={logostar}/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}