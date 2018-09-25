import React, { Component } from 'react';
import moviePosters from '../../moviePosters.json';
import Poster from '../Poster';
import Marquee from '../Marquee';

class PosterTable extends Component {

    state = {
        posters: moviePosters,
        score: 0,
        topScore: 0,
        clicked: [],
        announcer: ""
    }

    componentDidMount(){
        this.setState({
            posters: this.randPosters(this.state.posters),
            announcer: "Improvise, Adapt, Overcome!"
        })
    }

    randPosters = posters => {
        for (let i = posters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [posters[i], posters[j]] = [posters[j], posters[i]];
        }
        return posters;
    }

    scoring = id => {
        const newScore = this.state.score + 1;
        console.log("score:" + this.state.score)
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }

        this.setState({
            posters: this.randPosters(this.state.posters),
            score: newScore,
            announcer: "You can do it!"
        });

    }

    reset = () => {
        this.setState({
            posters: this.randPosters(this.state.posters),
            score: 0,
            clicked: [],
            announcer: "You chosed poorly."
        });
    }

    playGame = (id) => {
        
        if (this.state.clicked.indexOf(id) === -1) {
            this.scoring();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            if (this.state.score === 11) {
                this.setState({
                    posters: this.randPosters(this.state.posters),
                    announcer: "I should have made it more difficult."
                })
            } else {
                this.reset();
            };
        };
    };

    render() {

        return (
            <div>
                <Marquee
                    announcer={this.state.announcer}
                    score={this.state.score}
                    topScore={this.state.topScore}>
                </Marquee>
                <div className = "container">
                    {this.state.posters.map(poster => {
                        return (
                            <Poster  
                                key={poster.id}                            
                                id={poster.id}
                                image={poster.image}
                                clicked={poster.clicked}
                                playGame={this.playGame}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        )
    };
};

export default PosterTable;