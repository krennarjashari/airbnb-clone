import React from "react";
import logosport from "../images/sport.png";
import logostar from "../images/star.png";

export default function Card(props) {

    let badgeText;

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={props.star} className="card--star" />
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--description">{props.description}</p>
            <p> <span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}