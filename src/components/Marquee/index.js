import React from "react";

const Marquee = props=> (
    <header className="Marquee">
        <h1>Remember that Movie Poster?</h1>
        <p>Don't click on the same Poster twice!</p>
        <nav className="scoreBoard">
        <h2> {props.announcer} </h2>
        <h2> Score: {props.score} </h2>
        <h2> Top Score: {props.topScore} </h2>
        </nav>
    </header>
);

export default Marquee;