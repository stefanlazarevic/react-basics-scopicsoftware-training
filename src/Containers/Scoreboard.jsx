// Library imports.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style imports.
import '../App.css';

// Component imports.
import Player from '../Components/Player.jsx';
import Header from '../Components/Header.jsx';
import AddPlayerForm from '../Components/AddPlayerForm.jsx';

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: this.props.players,
        };

        this.uniqueId = this.props.players.length;

        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.pushNewUser = this.pushNewUser.bind(this);
        this.removePlayer = this.removePlayer.bind(this);
    }

    handleScoreChange(index, delta) {
        const players = this.state.players;
        players[index].score += delta;
        this.setState({
            players,
        });
    }

    pushNewUser(name) {
        const players = this.state.players;
        players.push({
            id: ++this.uniqueId,
            name,
            score: 0,
        });

        this.setState({
            players
        });
    }

    removePlayer(index) {
        this.state.players.splice(index, 1);
        this.setState({
            players: this.state.players,
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={ this.props.title } players={ this.state.players }/>
                <div className="players">
                    {
                        this.state.players.sort((a, b) => b.score - a.score).map(
                            (player, index) =>
                                <Player key={ index }
                                        name={ player.name }
                                        score={ player.score }
                                        onScoreChange={ (delta) => this.handleScoreChange(index, delta) }
                                        onRemove={ () => this.removePlayer(index) } />
                        )
                    }
                </div>
                <AddPlayerForm addNewPlayer={ this.pushNewUser } />
            </div>
        );
    }
};

Scoreboard.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
    })),
};

Scoreboard.defaultProps = {
    title: 'Scoreboard',
};

export default Scoreboard;
