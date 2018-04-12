// Library imports.
import React from 'react';
import PropTypes from 'prop-types';

const Statistics = (props) => {
        let totalPlayers = props.players.length;
        let totalScore = props.players.reduce((total, player) => {
            return total += player.score;
        }, 0);

        return (
            <table className="stats">
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td>{ totalPlayers }</td>
                    </tr>
                    <tr>
                        <td>Total points:</td>
                        <td>{ totalScore }</td>
                    </tr>
                </tbody>
            </table>
        );
}

Statistics.propTypes = {
    totalPlayers: PropTypes.number,
    totalPoints: PropTypes.number
};

Statistics.defaultProps = {
    totalPlayers: 0,
    totalPoints: 0,
};

export default Statistics;
