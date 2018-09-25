import React from 'react';

const ScoreBoard = props => (
    <nav className="container-fluid">
        <h2> {props.announcer} </h2>
        <h2> Score: {props.score} </h2>
        <h2> Top Score: {props.topScore} </h2>
    </nav>
);
export default ScoreBoard