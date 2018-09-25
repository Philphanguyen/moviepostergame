import React from "react";
import "./Poster.css";

const Poster = props => (
    <div onClick= {() => props.playGame(props.id)}
    className='Poster'>
        <img alt={props.name} src={props.image} />
    </div>
);

export default Poster;