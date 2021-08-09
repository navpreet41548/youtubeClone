import React from 'react'
import "./Card.css"


function Card(props) {
    return (
        <div className="card">
            <img className="cardImg" src={props.img}/>
            <div className="videoInfo">
                <div className="videoInfoImg">
                    <img src={props.profile} />
                </div>
                <div className="info">
                    <p className="title">{props.title}</p>
                    <p className="channelName">{props.channelName}</p>
                    <p className="views">{props.views}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
